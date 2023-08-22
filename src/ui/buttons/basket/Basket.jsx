import PropTypes from 'prop-types';
import style from './Basket.module.scss';

const Basket = ({ counter }) => (
  <button className={style.basket} type="button">
    {counter > 0 && <span className={style.counter}>{counter}</span>}
  </button>
);

Basket.propTypes = {
  counter: PropTypes.number,
};

Basket.defaultProps = {
  counter: 0,
};

export default Basket;
