import { Link } from 'react-router-dom';
import classes from './style.module.scss';

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.footer__info}>
      <p className={classes.footer__title}>
        Purrfect care / Перрфект Кэа
        <span className={classes.footer__copyright}>&copy;</span>
        {new Date().getFullYear()}
      </p>
      <Link
        to="purrfectcare.ru"
        target="_blank"
        className={classes.footer__link}
      >
        hepl@yandex.ru
      </Link>
    </div>
    <ul className={classes.footer__links}>
      <li>
        <Link
          to="purrfectcare.ru"
          target="_blank"
          className={classes.footer__link}
        >
          Соглашение
        </Link>
      </li>
      <li>
        <Link
          to="purrfectcare.ru"
          target="_blank"
          className={classes.footer__link}
        >
          Политика конфиденциальности
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
