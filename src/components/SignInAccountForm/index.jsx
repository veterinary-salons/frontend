import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';
import MailAccount from '../MailAccount';

function SignInAccountForm() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [isValidateInput, setIsValidateInput] = useState({});
  const [values, setValues] = useState({});

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('auth', true);
    navigate('/');
  };

  return (
    <form
      onChange={handleFormValidChange}
      className={classes.form}
      id="account-signin-form"
    >
      <h3 className={classes.form__title}>Войдите в аккаунт</h3>
      <MailAccount to='/signin' />
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
          initialValue={{email: "asya1995cat@mail.ru"}}
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
      </fieldset>
      <Link
        to="/recovery"
        className={classes.form__link}
      >
        Забыли пароль?
      </Link>
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
    </form>
  );
}

export default SignInAccountForm;
