import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './style.module.scss';

const PopupWithForm = ({ title, children, isOpen, onClose }) => {
  const getPopupClasses = classnames(classes.popup, {
    [classes.popup_opened]: isOpen,
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleEscBtn = (e) => {
      if (e.keyCode === 27) onClose();
    };
    document.addEventListener('keydown', handleEscBtn);
  }, [isOpen, onClose]);

  return (
    <section className={getPopupClasses}>
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
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
};

PopupWithForm.defaultProps = {
  title: 'Ничего, будем рады помочь вам в другой раз',
  children: null,
  isOpen: true,
  onClose: false,
};

export default PopupWithForm;
