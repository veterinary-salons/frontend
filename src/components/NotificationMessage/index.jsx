import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';


function NotificationMessage({ imageNumber, title, text, to, buttonText }) {
  return (
    <div className={classes.notification}>
      <div className={classes[`notification__image-${imageNumber}`]} />
      <h1 className={classes.notification__title}>{title}</h1>
      <p className={classes.notification__message}>{text}</p>
      <Link to={to}>
        <Button variant="purple-filled" size="small" type="button">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
}

NotificationMessage.propTypes = {
  imageNumber: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
  buttonText: PropTypes.string,
};

NotificationMessage.defaultProps = {
  imageNumber: '10',
  title: 'Тут пусто как в миске этого котика',
  text: 'Неужели вы ещё не видели как много у нас полезного и интересного?',
  to: '/',
  buttonText: 'Выбрать товары',
};

export default NotificationMessage;
