// import { useEffect } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import classes from './style.module.scss';
import usePopupClose from '../../hooks/usePopupClose';

const PopupWithForm = ({ title, children, isOpen, onClose }) => {
  usePopupClose(isOpen, onClose);
console.log(isOpen);
  // const getPopupClasses = classnames(classes.popup, {
  //   [classes.popup_opened]: isOpen,
  // });

  // useEffect(() => {
  //   if (!isOpen) return;

  //   const handleEscBtn = (e) => {
  //     if (e.keyCode === 27) onClose();
  //   };
  //   document.addEventListener('keydown', handleEscBtn);
  // }, [isOpen, onClose]);

  return (
    <section className={classes.popup [classes.popup_opened]}>
      <div className={classes.popup__container}>
        <form className={classes.popup__form}>
          <h2 className={classes.popup__title}>{title}</h2>
          {children}
        </form>
      </div>
    </section>
  );
};

PopupWithForm.propTypes = {
  title: PropTypes.oneOf([
    'Ничего, будем рады помочь вам в другой раз',
    'Вы связались с заказчиком и договорились о встрече?',
    'Вы уверены, что хотите снять объявление с публикации?',
    'Вы уверены, что хотите отменить бронирование?',
    'Вы уверены что хотите выйти из аккаунта?'
  ]),
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

PopupWithForm.defaultProps = {
  title: 'Ничего, будем рады помочь вам в другой раз',
  children: null,
  isOpen: true,
  onClose: () => {},
};

export default PopupWithForm;
