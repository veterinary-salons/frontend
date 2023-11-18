import { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from './style.module.scss';
import ServicesFilterMainMobile from "../Filters/ServicesFilters/ServicesFilterMainMobile";

function MobileFilterMenuPopup({isOpen, onClose}) {
  const filterPopupCN = classNames(classes['mobile-filter-popup'], {
    [classes['mobile-filter-popup_opened']]: isOpen,
  });

  const closeBtnCN = classNames(classes['mobile-filter-popup__close-btn']);

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
    <div className={filterPopupCN} onClick={handleCloseByOverlay}>
      <div className={classes['mobile-filter-popup__content']}>
        <div className={classes['mobile-filter-popup__container']}>
          <button
            className={closeBtnCN}
            aria-label="close-btn"
            type="button"
            onClick={onClose}
          />
          <div className={classes['mobile-filter-popup__wrap']}>
            <p className={classes['mobile-filter-popup__header']}>Фильтры</p>
            <button className={classes['mobile-filter-popup__remove']}>
              Сбросить
            </button>
          </div>
        </div>
        <ServicesFilterMainMobile />
      </div>
    </div>
  );
}

MobileFilterMenuPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

MobileFilterMenuPopup.defaultProps = {
  isOpen: false,
  onClose: null,
};

export default MobileFilterMenuPopup;
