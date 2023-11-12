import { useNavigate } from 'react-router-dom';
import MailAccount from '../MailAccount';
import MailAccountAddition from '../MailAccountAddition'
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';

function SignInAccountMain() {
  const navigate = useNavigate();
  const previosUser = JSON.parse(localStorage.getItem('previousAccount'));

  return (
    <div className={classes.auth}>
      <h3 className={classes.auth__title}>Войдите в аккаунт</h3>
      <div className={classes.auth__group}>
        <p className={classes.auth__subtitle}>Вы вышли из аккаунта:</p>
        <MailAccount
          image={previosUser.src}
          title={previosUser.name}
          email={previosUser.email}
          to='/signin-with-account'
        />
        <MailAccountAddition />
      </div>
      <div className={classes.auth__navbox}>
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
