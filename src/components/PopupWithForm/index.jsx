import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './style.module.scss';

const PopupWithForm = ({ 
  name, 
  title, 
  children, 
  isOpen, 
  onClose
}) => {

  const getPopupClasses = classnames(
    classes.popup,
    classes[`popup_${name}`],
    {
      [classes.popup_opened]: isOpen
    }

  );

  useEffect(() => {
    if (!isOpen) return;

    const handleEscBtn = (e) => {
      if (e.keyCode === 27)
        onClose()
    }
    document.addEventListener('keydown', handleEscBtn)
  }, [isOpen, onClose])

  return (

    <section className={getPopupClasses} >
      <div className={classes.popup__container}>
        <div className={classes.popup__content}>
          <form
            className={classes.popup__form}
            name={name}
            id={name}
          >
            <h2 className={classes.popup__title}>{title}</h2>
            {children}
          </form>
        </div>
      </div>
    </section>
  )
}

PopupWithForm.propTypes = {
  name: PropTypes.string,
  title: PropTypes.oneOf([
    'Ничего, будем рады помочь вам в другой раз',
    'Вы связались с заказчиком и договорились о встрече?',
    'Вы уверены, что хотите снять объявление с публикации?',
    'Вы уверены, что хотите отменить бронирование?',
  ]),
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
};

PopupWithForm.defaultProps = {
  name: 'infotool',
  title: 'Ничего, будем рады помочь вам в другой раз',
  children: null,
  isOpen: true,
  onClose: false,
};

export default PopupWithForm;