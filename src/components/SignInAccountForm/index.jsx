import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserType } from '../../app/store/userSlice';
import Button from '../../ui/buttons/originButton/Button';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import { handleAuthorization } from '../../utils';
import MailAccount from '../MailAccount';
import classes from './style.module.scss';

function SignInAccountForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [isValidateInput, setIsValidateInput] = useState({});
  const [values, setValues] = useState({});
  const [submitError, setSubmitError] = useState('');
  const previosUser = JSON.parse(localStorage.getItem('previousAccount'));

  const isActive =
    Object.values(isValidateInput).every((item) => item) && isValid;

  const handleFormChange = (value) => {
    setValues({
      ...values,
      ...value,
    });
  };

  const handleFormValidChange = (e) => {
    setIsValid(e.target.closest('form').checkValidity());
  };

  const successfulNav = () => {
    navigate('/', {replace: true});
  };

  const handleUserType = (profileType) => {
    dispatch(setUserType(profileType));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const {email, password} = values;
    handleAuthorization(email, password, successfulNav, setSubmitError, handleUserType);
  };

  return (
    <form
      onChange={handleFormValidChange}
      className={classes.form}
      id="account-signin-form"
    >
      <h3 className={classes.form__title}>Войдите в аккаунт</h3>
      <MailAccount
        image={previosUser.src}
        title={previosUser.name}
        email={previosUser.email}
        to='/signin'
      />
      <fieldset className={classes.form__fieldset}>
        <InputText
          type="email"
          placeholder="Почта"
          name="email"
          maxLength={50}
          minLength={5}
          required
          getInput={handleFormChange}
          id="email-input"
          autoComplete="email"
          getValid={setIsValidateInput}
          initialValue={{email: previosUser.email}}
        />
        <InputText
          type="password"
          placeholder="Пароль"
          name="password"
          maxLength={20}
          minLength={8}
          required
          getInput={handleFormChange}
          id="password-input"
          autoComplete="current-password"
          getValid={setIsValidateInput}
        />
      </fieldset>
      <Link
        to="/recovery"
        className={classes.form__link}
      >
        Забыли пароль?
      </Link>
      <div>
        <div className={classes['form__button-wrapper']}>
          <Button
            onClick={() => navigate(-1)}
            variant="outlined"
            size="medium"
            type="button"
          >
            Назад
          </Button>
          <Button
            onClick={handleFormSubmit}
            variant="purple-filled"
            size="medium"
            type="submit"
            active={isActive}
          >
            Войти
          </Button>
        </div>
        <span className={classes.form__error}>
          {submitError}
        </span>
      </div>
    </form>
  );
}

export default SignInAccountForm;
