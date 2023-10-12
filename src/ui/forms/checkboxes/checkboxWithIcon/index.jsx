import PropTypes from 'prop-types';
import Checkbox from '../checkbox/checkbox';
import classes from './style.module.scss';

const CheckboxWithIcon = ({
  children,
  getCheckbox,
  checked,
  label,
  value,
  name,
  parentName,
}) => {
  const handleGetCheckbox = (initial) => {
    getCheckbox((state) => ({
      ...state,
      [parentName]: state[parentName].map((item) => {
        if (Object.keys(item).includes(name)) {
          if (value === initial[name]) {
            return {
              ...item,
              [name]: true,
            };
          }
          return {
            ...item,
            [name]: false,
          };
        }
        return {
          ...item,
        };
      }),
    }));
  };
  return (
    <div className={classes.wrapper}>
      {children}
      <Checkbox
        getCheckbox={handleGetCheckbox}
        type="switch"
        checked={checked}
        value={value}
        reverse
        name={name}
        width="100%"
      >
        {label}
      </Checkbox>
    </div>
  );
};

CheckboxWithIcon.defaultProps = {
  label: '',
  children: null,
  name: '',
  parentName: '',
};

CheckboxWithIcon.propTypes = {
  getCheckbox: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default CheckboxWithIcon;
