import { Link } from 'react-router-dom';
import classes from './style.module.scss';

const Footer = () => (
  <footer className={classes.footer}>
    <p className={classes.footer__title}>
      Purrfect care / Перрфект Кэа &copy; {new Date().getFullYear()}
    </p>
    <ul className={classes.footer__links}>
      <li className={classes.footer__item}>
        <Link
          to="purrfectcare.ru"
          target="_blank"
          className={classes.footer__link}
        >
          purrfectcare.ru
        </Link>
      </li>
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