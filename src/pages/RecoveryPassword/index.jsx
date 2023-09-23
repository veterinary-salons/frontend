import classes from './style.module.scss';
import RecoveryFormPassword from '../../components/RecoveryFormPassword';

const RecoveryPassword = () => (
  <section className={classes.login}>
    <RecoveryFormPassword />
  </section>
);

export default RecoveryPassword;