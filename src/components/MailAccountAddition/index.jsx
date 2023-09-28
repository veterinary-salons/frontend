import { Link } from 'react-router-dom';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

function MailAccountAddition() {

  return (
    <Link to='/signin-no-account' className={classes.card}>
      <Button shape="round" size="small" variant="add" />
      <div className={classes.card__info}>
        <span className={classes.card__title}>Войти c другого<br/>аккаунта</span>
      </div>
    </Link>
  );
}

export default MailAccountAddition;
