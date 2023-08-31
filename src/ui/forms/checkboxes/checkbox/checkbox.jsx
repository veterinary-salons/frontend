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
  gap,
  width,
  disabled,
  children
}) => {
  const visibleCN = classNames(classes[type]);
  const wrapperCN = classNames(
    classes.label, reverse ? classes.reverse : null,
    type==='radio' ? classes['label-radio'] : null,
    value==='registration-agreement' && !disabled ? classes['label-agreement'] : null,
    value==='registration-agreement' && disabled ? classes['label-agreement_disabled'] : null
  );

  return (
    <label htmlFor={value} className={wrapperCN}
    style={{ gap, width}}
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
  name: '',
  reverse: false,
  gap: '8px',
  width: '',
  disabled: false,
  children: null
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  htmlType: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  reverse: PropTypes.bool,
  gap: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default Checkbox;
