import { useState } from 'react';
import classes from './style.module.scss';
import MobileSortingPopup from '../MobileSortingPopup';

function MobileSortingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortingMenuClick = () => {
    setIsOpen(true);
  };

  // console.log(isOpen);

  const closeSortingMenuPopup = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes['mobile-sorting']}>
      <button
        className={classes['mobile-sorting__btn']}
        type="button"
        aria-label="sorting-btn"
        onClick={handleSortingMenuClick}
      />
      <MobileSortingPopup isOpen={isOpen} onClose={closeSortingMenuPopup} />
    </div>
  );
}

export default MobileSortingMenu;
