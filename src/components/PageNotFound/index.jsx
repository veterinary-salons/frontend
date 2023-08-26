import { NavLink } from 'react-router-dom';
import classes from './style.module.scss';
import Logo from '../../ui/icons/logo/Logo';

import image from '../../assets/images/images/notification-images/11.svg';

function PageNotFound() {
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
        <h1 className={classes.error__title}>Ошибка 404</h1>
        <div>
          <p className={classes.error__message}>Такой страницы не&nbsp;существует</p>
          <p className={classes.error__message}>Зато существуют другие &#40;:</p>
        </div>
        <ul className={classes.error__links}>
          <li>
            <NavLink
              to="purrfectcare.ru"
              className={classes.error__link}
            >
              Товары
            </NavLink>
          </li>
          <li>
            <NavLink
              to="purrfectcare.ru"
              className={classes.error__link}
            >
              Услуги
            </NavLink>
          </li>
          <li>
            <NavLink
              to="purrfectcare.ru"
              className={classes.error__link}
            >
              Журнал
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default PageNotFound;