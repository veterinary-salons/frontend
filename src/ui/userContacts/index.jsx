import PropTypes from 'prop-types';
import classes from './style.module.scss';

const UserContacts = ({ title, subtitle }) => (
  <div className={classes.contacts}>
    <h3 className={classes.contacts__title}>{title}</h3>
    <p className={classes.contacts__subtitle}>{subtitle}</p>
  </div>
);

UserContacts.defaultProps = {
  title: null,
  subtitle: null,
};

UserContacts.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default UserContacts;
