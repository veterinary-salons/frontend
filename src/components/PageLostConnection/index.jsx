import { NavLink } from 'react-router-dom';
import classes from './style.module.scss';
import Logo from '../../ui/icons/logo/Logo';
import { Button } from '../../ui/buttons/originButton/Button';

import image from '../../assets/images/images/notification-images/11.svg';

function PageLostConnection() {
  function refreshPage() {
    window.location.reload();
  };

  return (
    <section className={classes.error}>
      <NavLink
        to="/"
        className={classes.error__logo}
      >
        <Logo />
      </NavLink>
      <div className={classes.error__info}>
        <img
          className={classes.error__image}
          src={image}
          alt="Page not found"
        />
        <h1 className={classes.error__title}>Не удаётся подключиться</h1>
        <p className={classes.error__message}>
          Браузер не&nbsp;может отобразить веб-страницу, потому что компьютер не&nbsp;подключен к&nbsp;Интернету
        </p>
        <Button
        onClick={() => refreshPage()}
        variant='purple-filled'
        size='small'
        type='button'
        >
          Перезагрузить
        </Button>
      </div>
    </section>
  )
};

export default PageLostConnection;