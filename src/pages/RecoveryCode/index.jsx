import classes from './style.module.scss';
import RecoveryFormCode from '../../components/RecoveryFormCode';

const RecoveryCode = () => (
  <section className={classes.login}>
    <RecoveryFormCode />
  </section>
);

export default RecoveryCode;