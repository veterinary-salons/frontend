import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';

const CartProductQuantityBox = ({ variant, counter, infoCounter }) => {
  const [count, setCount] = useState(counter);

  const handleCalculation = (sum, calculation) =>
    calculation === 'plus' ? setCount(() => sum + 1) : setCount(() => sum - 1);

  useEffect(() => {
    infoCounter(count);
  }, [count]);

  return (
    <div className={classes['quantity-box']}>
      <button
        className={classes[`quantity-box__btn`]}
        type="button"
        onClick={() => handleCalculation(count, 'plus')}
      >
        <div className={classes[`quantity-box__plus-${variant}`]} />
      </button>
      <span className={classes[`quantity-box__counter-${variant}`]}>
        {count}
      </span>
      <button
        disabled={count === 0}
        className={classes[`quantity-box__btn`]}
        type="button"
        onClick={() => handleCalculation(count)}
      >
        <div className={classes[`quantity-box__minus-${variant}`]} />
      </button>
    </div>
  );
};

CartProductQuantityBox.propTypes = {
  variant: PropTypes.string,
  counter: PropTypes.number,
  infoCounter: PropTypes.func,
};

CartProductQuantityBox.defaultProps = {
  variant: 'alternative',
  counter: 0,
  infoCounter: () => {},
};

export default CartProductQuantityBox;
