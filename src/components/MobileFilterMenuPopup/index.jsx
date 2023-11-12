import { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from './style.module.scss';
import ServicesFilterMain from '../Filters/ServicesFilters/ServicesFilterMain';

function MobileFilterMenuPopup(isOpen, onClose) {
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

  return (
    <div className={filterPopupCN}>
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
        <ServicesFilterMain />
      </div>
    </div>
  );
}

MobileFilterMenuPopup.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  isOpen: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  onClose: PropTypes.func,
};

MobileFilterMenuPopup.defaultProps = {
  isOpen: false,
  onClose: null,
};

export default MobileFilterMenuPopup;
