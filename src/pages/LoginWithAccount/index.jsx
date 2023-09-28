import classes from './style.module.scss';
import SignInAccountForm from '../../components/SignInAccountForm';

const LoginWithAccount = () => (
  <section className={classes.login}>
    <SignInAccountForm />
  </section>
);

export default LoginWithAccount;