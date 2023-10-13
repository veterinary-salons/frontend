import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserType } from '../../app/store/userSlise';
import { handleAuthorization } from '../../utils';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';

function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [isValidateInput, setIsValidateInput] = useState({});
  const [values, setValues] = useState({});
  const [submitError, setSubmitError] = useState('');

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
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const {email, password} = values;
    handleAuthorization(email, password, successfulNav, setSubmitError, handleUserType);
  };

  return (
    <form
      onChange={handleFormValidChange}
      className={classes.form}
      id="signin-form"
    >
      <h2 className={classes.form__title}>Войдите в аккаунт</h2>
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
        />
        <InputText
          type="password"
          placeholder="Пароль"
          name="password"
          maxLength={20}
          minLength={6}
          required
          getInput={handleFormChange}
          id="password-input"
          autoComplete="current-password"
          getValid={setIsValidateInput}
        />
        <Link
          to="/recovery"
          className={classes.form__link}
        >
          Забыли пароль?
        </Link>
      </fieldset>
      <div>
        <div className={classes['form__button-wrapper']}>
          <Button
            onClick={handleFormSubmit}
            variant="purple-filled"
            size="medium"
            type="submit"
            isMaxWidth
            active={isActive}
          >
            Войти
          </Button>
          <div className={classes.form__navbox}>
            <h3 className={classes.form__navtext}>Нет аккаунта?</h3>
            <Button
              onClick={() => navigate('/signup')}
              variant="outlined"
              size="medium"
              type="button"
              isMaxWidth
            >
              Зарегистрироваться
            </Button>
          </div>
        </div>
        <span className={classes.form__error}>
          {submitError}
        </span>
      </div>
    </form>
  );
}

export default SignInForm;
