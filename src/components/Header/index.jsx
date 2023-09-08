import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../ui/icons/logo/Logo';
import Button from '../../ui/buttons/originButton/Button';
import SearchForm from '../../ui/forms/inputs/searchForm/index';
import NavigationPages from '../../modules/navigation/navigatePages/index';
import NavigationLink from '../../ui/icons/navigationLink/index';
import classes from './style.module.scss';

const Header = ({ authorization, onlyLogo }) => (
  <header className={classes.header}>
    {onlyLogo ?
      <Link className={classes.header__link} to="/">
        <Logo />
      </Link>
    :
      <>
        <div className={[classes.header__container]}>
          <Link className={classes.header__link} to="/">
            <Logo />
          </Link>
          <SearchForm />
        </div>

        <div className={[classes.header__container]}>
          <NavigationPages />
        </div>

        {authorization ? 
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
          </div>
        : 
          <div className={[classes['header__container-btn']]}>
            <Link to="/signin">
              <Button
                variant="outlined"
                size="medium"
                type="button"
                shape="square"
                label="Вход"
                onClick={() => {}}
              >
                Вход
              </Button>
            </Link>

            <Link to="/signup">
              <Button
                variant="outlined"
                size="medium"
                type="button"
                shape="square"
                label="Регистрация"
                onClick={() => {}}
              >
                Регистрация
              </Button>
            </Link>
          </div>
        }
      </>
    }
  </header>
);

Header.propTypes = {
  authorization: PropTypes.string,
  onlyLogo: PropTypes.bool
};

Header.defaultProps = {
  authorization: '',
  onlyLogo: false
};

export default Header;
