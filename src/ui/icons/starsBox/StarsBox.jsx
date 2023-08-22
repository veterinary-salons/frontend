// TODO: Проверить работает ли у вас. Я установила зависимости пакетов. Но звезды не загружаются. Ошибка. Проверить

import Rating from 'react-simple-star-rating';
import PropTypes from 'prop-types';
import style from './StarsBox.module.scss';

const StarsBox = ({ rating }) =>
  rating > 0 ? (
    <section className={style.container}>
      <Rating initialValue={rating} fillColor="#9384B7" readonly />
      <p className={style.text}>{rating}</p>
    </section>
  ) : (
    <Rating fillColor="#9384B7" />
  );

StarsBox.propTypes = {
  rating: PropTypes.number,
};

StarsBox.defaultProps = {
  rating: 0,
};

export default StarsBox;
