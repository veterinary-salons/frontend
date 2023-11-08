import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

function NotificationMessage({ imageNumber, title, text, to, buttonText }) {
  const navigate = useNavigate();

  return (
    <div className={classes.notification}>
      <div className={classNames(classes.notification__image, classes[`notification__image-${imageNumber}`])} />
      <h1 className={classes.notification__title}>{title}</h1>
      <p className={classes.notification__message}>{text}</p>
        <Button
          variant="purple-filled"
          size="medium"
          type="button"
          onClick={() => navigate(to)}
        >
          {buttonText}
        </Button>
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
