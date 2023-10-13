import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';

const ProfileAvatar = ({ src, bigSize, smallSize, forCards }) => (
  <div
    className={classNames(
      classes['big-avatar'],
      bigSize ? classes['big-avatar_big'] : null,
      smallSize ? classes['big-avatar_small'] : null,
      forCards ? classes['big-avatar_white-back'] : null
    )}
  >
    {src ? (
      <img className={classes['big-avatar__image']} src={src} alt="Аватар" />
    ) : null}
  </div>
);

ProfileAvatar.defaultProps = {
  src: null,
  bigSize: false,
  smallSize: false,
  forCards: false
};

ProfileAvatar.propTypes = {
  src: PropTypes.string,
  bigSize: PropTypes.bool,
  smallSize: PropTypes.bool,
  forCards: PropTypes.bool
};
export default ProfileAvatar;
