import PropTypes from 'prop-types';
import { useState, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../ui/icons/logo/Logo';
import Portal from '../Portal';
import Button from '../../ui/buttons/originButton/Button';
import SearchForm from '../../ui/forms/inputs/searchForm/index';
import NavigationPages from '../../modules/navigation/navigatePages/index';
import NavigationLink from '../../ui/icons/navigationLink/index';
import classes from './style.module.scss';
import SideNavBar from '../SideNavBar';

const Header = ({ authorization, onlyLogo }) => {

  const [width, setWidth] = useState('');
  const [screenType, setScreenType] = useState('');
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  useEffect(() => {
    if(width <= 560) {
      setScreenType('mobile-vertical');
    } else if(width <= 760) {
      setScreenType('mobile-horizontal');
    } else if(width <= 1270) {
      setScreenType('tablet');
    } else {
      setScreenType('pc');
    }
    // eslint-disable-next-line
  }, [width]);

  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        {onlyLogo ? (
          <Link className={classes.header__link} to="/">
            <Logo />
          </Link>
        ) : (
          <div>
            <div className={classes.header__content}>
              <div className={[classes.header__container]}>
                <Link className={classes.header__link} to="/">
                  <Logo />
                </Link>
                {screenType === 'pc' && <SearchForm authorization />}
              </div>

              {screenType !== 'mobile-vertical' && 
                <div className={[classes.header__container]}>
                  <NavigationPages />
                </div>
              }
              {screenType === 'mobile-vertical' && 
                <Portal isOpened={isOpenPopup}>
                  <SideNavBar
                    isOpen={isOpenPopup}
                    onClose={handleClosePopup}
                  />
                </Portal>
              }

              {authorization ? (
                <div className={[classes['header__container-btn']]}>
                  <Link to="/favourites/goods">
                    <NavigationLink variant="wishlist" />
                  </Link>

                  <Link to="/basket">
                    <NavigationLink variant="basket" />
                  </Link>

                  <Link to="/profile">
                    <NavigationLink variant="profile" />
                  </Link>

                  {screenType === 'mobile-vertical' &&
                    <button
                      className={[classes['header__burger-button']]}
                      onClick={handleOpenPopup}
                    >
                      <NavigationLink variant="menu" />
                    </button>
                  }
                </div>
              ) : (
                <div className={[classes['header__container-btn']]}>
                  <Link to="/signin">
                    <Button
                      variant="outlined"
                      size="medium"
                      type="button"
                      shape="square"
                      label="Вход"
                      onClick={() => {}}
                      isHeader
                    >
                      Вход
                    </Button>
                  </Link>

                  {screenType !== 'mobile-vertical' &&
                    <Link to="/signup">
                      <Button
                        variant="outlined"
                        size="medium"
                        type="button"
                        shape="square"
                        label="Регистрация"
                        onClick={() => {}}
                        isHeader
                      >
                        Регистрация
                      </Button>
                    </Link>
                  }

                  {screenType === 'mobile-vertical' &&
                    <button
                      className={[classes['header__burger-button']]}
                      onClick={handleOpenPopup}
                    >
                      <NavigationLink variant="menu" />
                    </button>
                  }
                  
                </div>
              )}
            </div>
            {screenType !== 'pc' && <SearchForm authorization />}
          </div>
        )}
      </div>
    </header>
    )
  }; 

Header.propTypes = {
  authorization: PropTypes.string,
  onlyLogo: PropTypes.bool,
};

Header.defaultProps = {
  authorization: '',
  onlyLogo: false,
};

export default Header;
