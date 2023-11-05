import CurrencyInput from 'react-currency-input-field';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';
import validateInput from '../../../../assets/constants/validation';

const InputPrice = ({
  prefix,
  name,
  initialValue,
  disabled,
  getInput,
  placeholder,
  valid,
}) => {
  const [values, setValues] = useState(initialValue);
  const getClassContainer = classNames(
    classes.input,
    {
      [classes.input_disabel]: disabled,
    },
    {
      [classes.input_color]: validateInput('price', null, values).invalid,
    },
    {
      [classes.input_success]: validateInput('price', null, values).invalid,
    },
    {
      [classes.input_error]: valid,
    },
  );

  useEffect(() => {
    getInput(values);
    // eslint-disable-next-line
  }, [values]);
  //  validateInput('price', name, values).invalid
  return (
    <CurrencyInput
      className={getClassContainer}
      id="input-example"
      name={name}
      placeholder={`${prefix} ${placeholder} ₽`}
      prefix={`${prefix} `}
      suffix=" ₽"
      maxLength={6}
      defaultValue=""
      decimalsLimit={1}
      onValueChange={(value) => setValues(value)}
    />
  );
};

InputPrice.propTypes = {
  prefix: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  initialValue: PropTypes.objectOf(PropTypes.string),
  getInput: PropTypes.func,
  placeholder: PropTypes.string,
  valid: PropTypes.bool,
};

InputPrice.defaultProps = {
  prefix: 'от',
  disabled: false,
  name: 'input-price',
  initialValue: {},
  getInput: () => {},
  placeholder: '0',
  valid: false,
};

export default InputPrice;
