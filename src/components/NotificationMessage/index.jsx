import PropTypes from 'prop-types';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

function NotificationMessage({imageNumber, title, text, onClick, buttonText}) {
  return (
    <div className={classes.notification}>
      <div
        className={classes[`notification__image-${imageNumber}`]}
      />
      <h1 className={classes.notification__title}>{title}</h1>
      <p className={classes.notification__message}>{text}</p>
      <Button
      onClick={onClick}
      variant='purple-filled'
      size='small'
      type='button'
      >
        {buttonText}
      </Button>
    </div>
  )
};

NotificationMessage.propTypes = {
  imageNumber: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
};

NotificationMessage.defaultProps = {
  imageNumber: '10',
  title: 'Тут пусто как в миске этого котика',
  text: 'Неужели вы ещё не видели как много у нас полезного и интересного?',
  buttonText: 'Выбрать товары'
};

export default NotificationMessage;