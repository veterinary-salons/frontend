import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './style.module.scss';

const PopupWithForm = ({ title, children, isOpen, onClose, onSubmit }) => {
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
      <div className={classes.popup__form} onSubmit={onSubmit}>
        <p className={classes.popup__title}>{title}</p>
        {children}
      </div>
    </section>
  );
};

PopupWithForm.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.bool,
  onSubmit: PropTypes.func,
};

PopupWithForm.defaultProps = {
  title: 'Ничего, будем рады помочь вам в другой раз',
  children: null,
  isOpen: false,
  onClose: true,
  onSubmit: null,
};

export default PopupWithForm;