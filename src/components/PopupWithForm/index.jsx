import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './style.module.scss';

const PopupWithForm = ({ title, children, isOpen, onClose, onSubmit }) => {
  const getPopupClasses = classnames(classes.popup, {
    [classes.popup_opened]: isOpen,
  });

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen]);

  const handleCloseByOverlay = (e) => {
    if (e.target.classList.contains(classes.popup)) {
      onClose();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <section className={getPopupClasses} onClick={handleCloseByOverlay}>
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
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

PopupWithForm.defaultProps = {
  title: 'Ничего, будем рады помочь вам в другой раз',
  children: null,
  isOpen: false,
  onClose: null,
  onSubmit: null,
};

export default PopupWithForm;
