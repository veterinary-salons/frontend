import { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from './style.module.scss';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import Button from '../../ui/buttons/originButton/Button';

function MobileSortingPopup({ isOpen, onClose }) {
  const sortingPopupCN = classNames(classes['mobile-sort-popup'], {
    [classes['mobile-sort-popup_opened']]: isOpen,
  });

  const closeBtnCN = classNames(classes['mobile-sort-popup__close-btn']);

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
    <div className={sortingPopupCN} onClick={handleCloseByOverlay}>
      <div className={classes['mobile-sort-popup__content']}>
        <div className={classes['mobile-sort-popup__container']}>
          <button
            className={closeBtnCN}
            aria-label="close-btn"
            type="button"
            onClick={onClose}
          />
          <div className={classes['mobile-sort-popup__wrap']}>
            <p className={classes['mobile-sort-popup__header']}>
              Сначала показывать
            </p>
            <button className={classes['mobile-sort-popup__remove']}>
              Сбросить
            </button>
          </div>
        </div>
        <ul className={classes['mobile-sort-popup__options']}>
          <li className={classes['mobile-sort-popup__option']}>
            <p className={classes['mobile-sort-popup__text']}>
              С хорошими отзывами
            </p>
            <Checkbox />
          </li>
          <li className={classes['mobile-sort-popup__option']}>
            <p className={classes['mobile-sort-popup__text']}>Дешевле</p>
            <Checkbox />
          </li>
          <li className={classes['mobile-sort-popup__option']}>
            <p className={classes['mobile-sort-popup__text']}>Дороже</p>
            <Checkbox />
          </li>
        </ul>
        <Button ariant="purple-filled" size="medium" type="submit" isMaxWidth>
          Применить
        </Button>
      </div>
    </div>
  );
}

MobileSortingPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

MobileSortingPopup.defaultProps = {
  isOpen: false,
  onClose: null,
};

export default MobileSortingPopup;
