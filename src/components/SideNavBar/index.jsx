import { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './style.module.scss';
import NavigationPages from '../../modules/navigation/navigatePages';

const SideNavBar = ({ isOpen, onClose }) => {
  const getSidenavClasses = classnames(classes.sidenav, {
    [classes.sidenav_opened]: isOpen,
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
    if (e.target.classList.contains(classes.sidenav)) {
      onClose();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <section
      className={getSidenavClasses} onClick={handleCloseByOverlay}
    >
      <div
        className={classes.sidenav__content}
      >
        <button
        className={classes['sidenav__close-button']}
        aria-label='Close'
        onClick={onClose}
        />
        <NavigationPages onClose={onClose} />
      </div>
    </section>
  );
};

SideNavBar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

SideNavBar.defaultProps = {
  isOpen: false,
  onClose: null,
};

export default SideNavBar;
