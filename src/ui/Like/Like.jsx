import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './Like.module.scss';

const Like = ({ conditionLike, onClick }) => (
  <button
    className={cn(style.like, { [style.action]: conditionLike })}
    type="button"
    onClick={() => onClick(conditionLike)}
    aria-label="лайк"
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
