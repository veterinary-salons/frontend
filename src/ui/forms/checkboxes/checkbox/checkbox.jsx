import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from './checkbox.module.scss';

const Checkbox = ({
  onChange,
  type,
  checked,
  label,
  htmlType,
  value,
  reverse,
  gap,
  width,
}) => {
  const visibleCN = classNames(classes[type]);
  const wrapperCN = classNames(classes.label, reverse ? classes.reverse : null);

  return (
    <label htmlFor={value} className={wrapperCN} style={{ gap, width }}>
      <input
        id={value}
        onChange={onChange}
        checked={checked}
        type={htmlType}
        className={classes.checkboxButton}
        value={value}
      />
      <span className={visibleCN} />
      {label}
    </label>
  );
};

Checkbox.defaultProps = {
  type: 'checkbox',
  label: '',
  htmlType: 'checkbox',
  reverse: false,
  gap: '12px',
  width: '',
};

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  htmlType: PropTypes.string,
  value: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  gap: PropTypes.string,
  width: PropTypes.string,
};

export default Checkbox;
