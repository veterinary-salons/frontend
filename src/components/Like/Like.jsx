import './Like.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Like = ({ conditionLike, onClick }) => (
  <button
    className={cn('like', { like_action: conditionLike })}
    type="button"
    onClick={() => onClick(conditionLike)}
    aria-label="Like"
  />
);

Like.propTypes = {
  conditionLike: PropTypes.bool,
  onClick: PropTypes.func,
};

Like.defaultProps = {
  conditionLike: false,
  onClick: (conditionLike) => !conditionLike,
};

export default Like;
