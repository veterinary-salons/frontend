import { useState } from 'react';
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
  gap,
  width,
  disabled,
  agreement,
  children,
  required,
  getCheckbox
}) => {
  const visibleCN = classNames(classes[type]);
  const wrapperCN = classNames(
    classes.label,
    reverse ? classes.reverse : null,
    type==='radio' ? classes['label-radio'] : null,
    agreement ? classes['label-agreement'] : null,
    disabled ? classes.label_disabled : null,
  );
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    getCheckbox({[name]: isChecked ? value : undefined})
    setIsChecked(state => !state)
  }

  return (
    <label htmlFor={name} className={wrapperCN}
    style={{ gap, width}}
    >
      <input
        id={value}
        onChange={handleCheckboxChange}
        checked={isChecked}
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
  gap: '8px',
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
  gap: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  agreement: PropTypes.bool,
  children: PropTypes.node,
  required: PropTypes.bool,
  getCheckbox: PropTypes.func.isRequired
};

export default Checkbox;
