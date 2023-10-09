import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './styles.module.scss';

const Tab = ({ pathname, children }) => {
  const activeLink = classNames(classes.tab, classes.tab_active);
  const isActiveLink = ({ isActive }) => (isActive ? activeLink : classes.tab);

  return (
    <NavLink
      end={pathname === '/profile'}
      to={pathname}
      className={isActiveLink}
    >
      {children}
    </NavLink>
  );
};

Tab.defaultProps = {
  children: null,
};

Tab.propTypes = {
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Tab;
