import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

function ErrorPageMessage({ width, title, msg, error404}) {
  function refreshPage() {
    window.location.reload();
  };

  return (
    <section className={classes.error} style={{width}}>
      <div
        className={classes.error__image}
      />
      <h1 className={classes.error__title}>{title}</h1>
      <p className={classes.error__message}>{msg}</p>
      {error404 ?
        <ul className={classes.error__links}>
          <li>
            <Link
              to="purrfectcare.ru"
              className={classes.error__link}
            >
              Товары
            </Link>
          </li>
          <li>
            <Link
              to="purrfectcare.ru"
              className={classes.error__link}
            >
              Услуги
            </Link>
          </li>
          <li>
            <Link
              to="purrfectcare.ru"
              className={classes.error__link}
            >
              Журнал
            </Link>
          </li>
        </ul>
      :
        <Button
          onClick={() => refreshPage()}
          variant='purple-filled'
          size='small'
          type='button'
        >
          Перезагрузить
        </Button>
      }
    </section>
  )
};

ErrorPageMessage.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string,
  msg: PropTypes.string,
  error404: PropTypes.bool,
};

ErrorPageMessage.defaultProps = {
  width: '620px',
  title: '',
  msg: '',
  error404: false,
}

export default ErrorPageMessage;