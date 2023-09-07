import { Link } from 'react-router-dom';
import Logo from '../../ui/icons/logo/Logo';
import classes from './style.module.scss';
import EnterForm from '../../components/EnterForm';

const Login = () => (
  <section className={classes.login}>
    <Link className={classes['login__container-logo']} to="/">
      <Logo />
    </Link>
    <section className={classes.login__form}>
    <EnterForm />
    </section>
  </section>
);

export default Login;
