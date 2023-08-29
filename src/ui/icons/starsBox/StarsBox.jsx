// TODO: Проверить работает ли у вас. Я установила зависимости пакетов. Но звезды не загружаются. Ошибка. Проверить

import { Rating } from 'react-simple-star-rating';
import PropTypes from 'prop-types';
import style from './StarsBox.module.scss';

const StarsBox = ({ rating, color, size }) =>
  rating > 0 ? (
    <div className={style.stars}>
      <p className={style.stars__text}>{rating}</p>
      <Rating
        className={style.stars__rating}
        initialValue={rating}
        fillColor={color || '#9384B7'}
        readonly
        size={size || '22px'}
      />
    </div>
  ) : (
    <Rating fillColor={color || '#9384B7'} />
  );

StarsBox.propTypes = {
  rating: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

StarsBox.defaultProps = {
  rating: '0',
  color: 'var(--yellow-color)',
  size: '20px',
};

export default StarsBox;
