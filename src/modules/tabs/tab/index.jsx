import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './styles.module.scss';

const Tab = ({ pathname, children, i }) => {
  const activeLink = classNames(classes.tab, classes.tab_active);
  const isActiveLink = ({ isActive }) => (isActive ? activeLink : classes.tab);
  
  return (
  <NavLink state={{index: i}} to={pathname} className={isActiveLink}>
    {children}
  </NavLink>
);
}

Tab.defaultProps = {
  children: null,
};

Tab.propTypes = {
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node,
  i: PropTypes.number.isRequired
};

export default Tab;
