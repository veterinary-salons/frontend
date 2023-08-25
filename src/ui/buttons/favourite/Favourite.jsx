import PropTypes from 'prop-types';
import style from './Favourite.module.scss';

const Favourite = ({ counter }) => (
  <button
    className={style.like}
    type="button"
    aria-label="лайк"
  >
  {counter > 0 && <span className={style.counter}>{counter}</span>}
  </button>
);

Favourite.propTypes = {
  counter: PropTypes.number,
};

Favourite.defaultProps = {
  counter: 0,
};

export default Favourite;