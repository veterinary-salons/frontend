import { useNavigate } from 'react-router-dom';
import MailAccount from '../MailAccount';
import MailAccountAddition from '../MailAccountAddition'
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';

function SignInAccountMain() {
  const navigate = useNavigate();

  return (
    <div className={classes.auth}>
      <h2 className={classes.auth__title}>Войдите в аккаунт</h2>
      <div className={classes.auth__group}>
        <h3 className={classes.auth__subtitle}>Вы вышли из аккаунта:</h3>
        <MailAccount to='/signin-with-account' />
      </div>
      <MailAccountAddition />
      <div className={classes.auth__group}>
        <h3 className={classes.auth__navtext}>Нет аккаунта?</h3>
        <Button
          onClick={() => navigate('/signup')}
          variant="purple-filled"
          size="medium"
          type="button"
        >
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
}

export default SignInAccountMain;
