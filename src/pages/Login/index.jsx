import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../ui/icons/logo/Logo';
import classes from './style.module.scss';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import Button from '../../ui/buttons/originButton/Button';

const Login = () => {
  const navigate = useNavigate();
  const [isValidateEmail, setIsValidateEmail] = useState({});
  const [isValidatePasswoed, setIsValidatePasswoed] = useState({});

  const handelSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('auth', true);
    navigate('/', { replace: true });
  };

  return (
    <section className={classes.login}>
      <Link className={classes['login__container-logo']} to="/">
        <Logo />
      </Link>

      <h3 className={classes.login__title}>Войдите в аккаунт</h3>
      <form className={classes.login__form} onSubmit={handelSubmit}>
        <InputText
          type="email"
          placeholder="Почта"
          name="login-email"
          maxLength={30}
          minLength={5}
          id="login-email-id"
          getInput={setIsValidateEmail}
        />
        <InputText
          type="password"
          placeholder="Пароль"
          name="login-password"
          maxLength={20}
          minLength={5}
          id="login-password-id"
          getInput={setIsValidatePasswoed}
        />
        <Link className={classes['login__link-recovery']} to="/recovery">
          Забыли пароль?
        </Link>
        <div className={classes['login__container-submit']}>
          <Button
            variant="purple-filled"
            size="medium"
            type="submit"
            isMaxWidth
            active={isValidateEmail.isValid && isValidatePasswoed.isValid}
          >
            Войти
          </Button>
        </div>
      </form>

      <h3 className={classes.login__subtitle}>Нет аккаунта?</h3>

      <Link className={classes['login__btn-signup']} to="/signup">
        <Button variant="outlined" size="medium" type="submit" isMaxWidth>
          Зарегистрироваться
        </Button>
      </Link>
    </section>
  );
};

export default Login;
