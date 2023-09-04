import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import validateInput from '../../../../assets/constants/validation';
import currency from '../../../../assets/images/icon/currency/currency.png';
import classes from './style.module.scss';

const InputPrice = ({ disabel, initialValue, name }) => {
  const [values, setValues] = useState(initialValue);
  const getClassContainer = classNames(
    classes.container,
    {
      [classes.container_disabel]: disabel,
    },
    {
      [classes.container_success]: validateInput('text', values[name]).invalid,
    },
  );

  const getClassInput = classNames(classes.input);

  return (
    <div className={getClassContainer}>
      <span className={classes.span}>от</span>
      <input
        maxLength={6}
        type="text"
        disabled={disabel}
        className={getClassInput}
        onChange={(e) => setValues({ ...values, [name]: e.target.value })}
        value={values[name]}
      />
      <img className={classes.currency} src={currency} alt="рубль" />
    </div>
  );
};

InputPrice.propTypes = {
  disabel: PropTypes.bool,
  initialValue: PropTypes.objectOf(PropTypes.string),
  name: PropTypes.string,
};

InputPrice.defaultProps = {
  disabel: false,
  initialValue: {},
  name: 'input-price',
};

export default InputPrice;
