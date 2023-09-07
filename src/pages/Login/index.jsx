import classes from './style.module.scss';
import SignInForm from '../../components/SignInForm';

const Login = () => (
  <section className={classes.login}>
    <SignInForm />
  </section>
);

export default Login;