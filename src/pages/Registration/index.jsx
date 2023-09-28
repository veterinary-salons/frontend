import classes from './style.module.scss';
import SignUpForm from '../../components/SignUpForm';

const Registration = () => (
  <section className={classes.reg}>
    <SignUpForm />
  </section>
);

export default Registration;