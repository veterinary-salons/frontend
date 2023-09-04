import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from './checkbox.module.scss';

const Checkbox = ({
  onChange,
  type,
  checked,
  htmlType,
  value,
  name,
  reverse,
  width,
  disabled,
  agreement,
  children
}) => {
  const visibleCN = classNames(classes[type]);
  const wrapperCN = classNames(
    classes.label,
    reverse ? classes.reverse : null,
    type==='radio' ? classes['label-radio'] : null,
    agreement ? classes['label-agreement'] : null,
    disabled ? classes.label_disabled : null,
  );

  return (
    <label htmlFor={name} className={wrapperCN}
    style={{width}}
    >
      <input
        id={value}
        onChange={onChange}
        checked={checked}
        type={htmlType}
        className={classes.checkboxButton}
        value={value}
        name={name}
        disabled={disabled}
      />
      <span className={visibleCN} />
      {children}
    </label>
  );
};

Checkbox.defaultProps = {
  type: 'checkbox',
  htmlType: 'checkbox',
  reverse: false,
  width: '',
  disabled: false,
  agreement: false,
  children: null
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  htmlType: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  agreement: PropTypes.bool,
  children: PropTypes.node
};

export default Checkbox;
