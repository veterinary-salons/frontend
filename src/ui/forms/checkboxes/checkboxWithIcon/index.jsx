import PropTypes from 'prop-types';
import Checkbox from '../checkbox/checkbox';
import classes from './style.module.scss';

const CheckboxWithIcon = ({ children, onChange, checked, label, value }) => (
  <div className={classes.wrapper}>
    {children}
    <Checkbox
      onChange={onChange}
      type="switch"
      checked={checked}
      label={label}
      value={value}
      reverse
      width="100%"
    />
  </div>
);

CheckboxWithIcon.defaultProps = {
  label: '',
  children: null,
};

CheckboxWithIcon.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default CheckboxWithIcon;
