import { Link } from 'react-router-dom';
import Logo from '../../ui/icons/logo/Logo';
import classes from './style.module.scss';
import InputText from '../../ui/forms/inputs/inputText/InputText';

const Login = () => (
  <section className={classes.login}>
    <Link className={classes['login__container-logo']} to="/">
      <Logo />
    </Link>

    <form>
      <h3>Войдите в аккаунт </h3>

      <InputText
        type="email"
        placeholder="Почта"
        name="login-email"
        maxLength={30}
        minLength={5}
        id="login-email-id"
        getInput={() => {}}
      />
      <InputText
        type="password"
        placeholder="Пароль"
        name="login-password"
        maxLength={30}
        minLength={5}
        id="login-password-id"
        getInput={() => {}}
      />
    </form>
  </section>
);

export default Login;
