import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';
import style from './StarsBox.module.scss';

const StarsBox = ({ action, rating, color, size }) =>
  action === 'filled' ? (
    <div className={style.stars}>
      {rating > 0 && <p className={style.stars__text}>{rating}</p>}
      <Rating
        className={style.stars__rating}
        initialValue={rating}
        fillColor={color || 'var(--primary-purple-color)'}
        allowFraction
        readonly
        size={size || '22px'}
      />
    </div>
  ) : (
    <Rating fillColor={color || 'var(--primary-purple-color)'} />
  );

StarsBox.propTypes = {
  action: PropTypes.string,
  rating: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

StarsBox.defaultProps = {
  action: 'filled',
  rating: '0',
  color: 'var(--yellow-color)',
  size: '20px',
};

export default StarsBox;
