import { useState } from 'react';
import classes from './style.module.scss';
import MobileFilterMenuPopup from '../MobileFilterMenuPopup';

function MobileFilterMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterMenuClick = () => {
    setIsOpen(true);
  };

  const closeFilterMenuPopup = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes['mobile-filter']}>
      <button
        className={classes['mobile-filter__btn']}
        type="button"
        aria-label="filter-btn"
        onClick={handleFilterMenuClick}
      />
      <MobileFilterMenuPopup isOpen={isOpen} onClose={closeFilterMenuPopup} />
    </div>
  );
}

export default MobileFilterMenu;
