import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from './checkbox.module.scss';

const Checkbox = ({
  type,
  checked,
  htmlType,
  value,
  name,
  reverse,
  width,
  disabled,
  agreement,
  children,
  required,
  getCheckbox,
}) => {
  const visibleCN = classNames(classes[type]);
  const wrapperCN = classNames(
    classes.label,
    reverse ? classes.reverse : null,
    type === 'radio' ? classes['label-radio'] : null,
    agreement ? classes['label-agreement'] : null,
    disabled ? classes.label_disabled : null,
  );

  const handleCheckboxChange = (e) => {
    getCheckbox(!checked ? { [name]: e.target.value } : { [name]: null });
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={wrapperCN} style={{width}}>
      <input
        onChange={handleCheckboxChange}
        checked={checked}
        type={htmlType}
        className={classes.checkboxButton}
        value={value}
        name={name}
        disabled={disabled}
        required={required}
      />
      <span className={visibleCN} />
      {children}
    </label>
  );
};

Checkbox.defaultProps = {
  type: 'checkbox',
  checked: false,
  htmlType: 'checkbox',
  reverse: false,
  width: '',
  disabled: false,
  agreement: false,
  children: null,
  required: false
};

Checkbox.propTypes = {
  type: PropTypes.string,
  checked: PropTypes.bool,
  htmlType: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  agreement: PropTypes.bool,
  children: PropTypes.node,
  required: PropTypes.bool,
  getCheckbox: PropTypes.func.isRequired
};

export default Checkbox;
