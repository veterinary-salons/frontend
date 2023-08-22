// TODO: назвать favourite. посмотреть в фигму. есть heart for favourite, favourite for like - две вариации.

import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './Heart.module.scss';

const Heart = ({ conditionHeart, onClick }) => (
  <button
    className={cn(style.like, { [style.action]: conditionHeart })}
    type="button"
    onClick={() => onClick(conditionHeart)}
    aria-label="лайк"
  />
);

Heart.propTypes = {
  conditionHeart: PropTypes.bool,
  onClick: PropTypes.func,
};

Heart.defaultProps = {
  conditionHeart: false,
  onClick: (conditionHeart) => !conditionHeart,
};

export default Heart;
