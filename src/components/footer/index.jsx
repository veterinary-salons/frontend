import { Link } from 'react-router-dom';
import classes from './style.module.scss';

const Footer = () => (
  <footer className={classes.footer}>
    <p className={classes.footer__title}>
      Purrfect care / Перрфект Кэа
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M9 1.125C4.65117 1.125 1.125 4.65117 1.125 9C1.125 13.3488 4.65117 16.875 9 16.875C13.3488 16.875 16.875 13.3488 16.875 9C16.875 4.65117 13.3488 1.125 9 1.125ZM9 15.5391C5.38945 15.5391 2.46094 12.6105 2.46094 9C2.46094 5.38945 5.38945 2.46094 9 2.46094C12.6105 2.46094 15.5391 5.38945 15.5391 9C15.5391 12.6105 12.6105 15.5391 9 15.5391ZM9.09844 6.1752C10.0301 6.1752 10.6629 6.76934 10.7332 7.64121C10.7385 7.71504 10.8 7.77129 10.8738 7.77129H11.8705C11.9162 7.77129 11.9531 7.73438 11.9531 7.68867C11.9531 6.16465 10.7508 5.09766 9.09316 5.09766C7.16133 5.09766 6.04688 6.40195 6.04688 8.55703V9.47637C6.04688 11.6156 7.16133 12.9023 9.09316 12.9023C10.7455 12.9023 11.9531 11.8687 11.9531 10.4168C11.9531 10.3711 11.9162 10.3342 11.8705 10.3342H10.8721C10.7982 10.3342 10.7385 10.3904 10.7314 10.4625C10.6576 11.2729 10.0266 11.8301 9.09668 11.8301C7.94883 11.8301 7.30195 10.9881 7.30195 9.48164V8.55703C7.30371 7.02773 7.95234 6.1752 9.09844 6.1752Z"
          fill="white"
        />
      </svg>
      2023
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