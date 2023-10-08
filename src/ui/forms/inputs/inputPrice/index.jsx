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
}) => {
  const [values, setValues] = useState(initialValue);
  const getClassContainer = classNames(
    classes.input,
    {
      [classes.input_disabel]: disabled,
    },
    {
      [classes.input_color]: validateInput('price', values).invalid,
    },
    {
      [classes.input_success]: validateInput('price', name, values).invalid,
    },
  );

  useEffect(() => {
    getInput({ name: values });
    // eslint-disable-next-line
  }, [values]);

  return (
    <CurrencyInput
      className={getClassContainer}
      id="input-example"
      name={name}
      placeholder={`${prefix} ${placeholder} ₽`}
      prefix={`${prefix} `}
      suffix=" ₽"
      maxLength={6}
      defaultValue=''
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
};

InputPrice.defaultProps = {
  prefix: 'от',
  disabled: false,
  name: 'input-price',
  initialValue: {},
  getInput: () => {},
  placeholder: '0',
};

export default InputPrice;
