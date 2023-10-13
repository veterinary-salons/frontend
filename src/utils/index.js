/* eslint-disable camelcase */
import { register, authorize } from '../api/Auth';

function handleAuthorization(email, password, successfulNav, setSubmitError) {
  if (!email || !password){
    return;
  }
  authorize(email, password)
  .then((res) => {
    localStorage.setItem('userData', JSON.stringify(res.profile_data));
    localStorage.setItem('auth', 'true');
    successfulNav();
    setSubmitError('');
  })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`);
    if(err.status === 404) {
      setSubmitError('Страница по указанному маршруту не найдена')
    } else if(err.status === 401) {
      setSubmitError('Вы ввели неправильный логин или пароль')
    } else if(err.status === 500) {
      setSubmitError('На сервере произошла ошибка')
    } else {
      setSubmitError('При авторизации произошла ошибка')
    }
  })
};

function handleRegistration(
  profile_type,
  first_name,
  last_name,
  phone_number,
  email,
  password,
  successfulNav,
  setSubmitError
) {
  register(
    profile_type,
    first_name,
    last_name,
    phone_number,
    email,
    password
  )
    .then(() => {
      handleAuthorization(email, password, successfulNav, setSubmitError);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.status}`);
      if(err.status === 404) {
        setSubmitError('Страница по указанному маршруту не найдена')
      } else if(err.status === 409) {
        setSubmitError('Пользователь с таким email уже существует')
      } else if(err.status === 500) {
        setSubmitError('На сервере произошла ошибка')
      } else {
        setSubmitError('При регистрации пользователя произошла ошибка')
      }
    })
};

export {
  handleAuthorization,
  handleRegistration,

}