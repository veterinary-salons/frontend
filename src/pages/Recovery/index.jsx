import classes from './style.module.scss';
import RecoveryFormEmail from '../../components/RecoveryFormEmail';

const Recovery = () => (
  <section className={classes.login}>
    <RecoveryFormEmail />
  </section>
);

export default Recovery;