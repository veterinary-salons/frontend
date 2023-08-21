import PropTypes from 'prop-types';
import './Basket.scss';

const Basket = ({ counter }) => (
  <button className="basket" type="button">
    {counter > 0 && <div className="basket__counter">{counter}</div>}
  </button>
);

Basket.propTypes = {
  counter: PropTypes.number,
};

Basket.defaultProps = {
  counter: 0,
};

export default Basket;
