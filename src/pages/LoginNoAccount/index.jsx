import classes from './style.module.scss';
import SignInForm from '../../components/SignInForm';

const LoginNoAccount = () => (
  <section className={classes.login}>
    <SignInForm />
  </section>
);

export default LoginNoAccount;