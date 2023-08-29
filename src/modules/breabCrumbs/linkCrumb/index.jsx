import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';

const LinkCrumb = ({ title, to, start }) => (
  <li>
    <NavLink
      end
      to={to}
      className={({ isActive }) =>
        classNames(
          classes['link-crumb'],
          start ? classes.start : null,
          isActive ? classes['link-crumb_active'] : null,
        )
      }
    >
      {title}
    </NavLink>
  </li>
);

LinkCrumb.defaultProps = {
  to: '/',
  start: false,
};

LinkCrumb.propTypes = {
  to: PropTypes.string,
  start: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default LinkCrumb;
