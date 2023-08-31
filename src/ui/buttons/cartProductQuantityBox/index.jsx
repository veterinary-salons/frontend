import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';

const CartProductQuantityBox = ({ variant, counter, getCounterNum }) => {
  const [count, setCount] = useState(counter);

  const handleCalculator = (i) => setCount((a) => a + i);

  useEffect(() => {
    getCounterNum(count);
  }, [count]);

  return (
    <div className={classes['quantity-box']}>
      <button
        className={classes[`quantity-box__btn`]}
        type="button"
        onClick={() => handleCalculator(1)}
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
        onClick={() => handleCalculator(-1)}
      >
        <div className={classes[`quantity-box__minus-${variant}`]} />
      </button>
    </div>
  );
};

CartProductQuantityBox.propTypes = {
  variant: PropTypes.string,
  counter: PropTypes.number,
  getCounterNum: PropTypes.func,
};

CartProductQuantityBox.defaultProps = {
  variant: 'alternative',
  counter: 0,
  getCounterNum: () => {},
};

export default CartProductQuantityBox;
