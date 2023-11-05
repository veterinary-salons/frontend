import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';

const ProfileAvatar = ({ src, bigSize, smallSize, forCards, forHeader }) => (
  <div
    className={classNames(
      classes.avatar,
      bigSize ? classes.avatar_big : null,
      smallSize ? classes.avatar_small : null,
      forCards ? classes['avatar_white-back'] : null,
      forHeader ? classes.avatar_header : null
    )}
  >
    {src ? (
      <img className={classes.avatar__image} src={src} alt="Аватар" />
    ) : null}
  </div>
);

ProfileAvatar.defaultProps = {
  src: null,
  bigSize: false,
  smallSize: false,
  forCards: false,
  forHeader: false
};

ProfileAvatar.propTypes = {
  src: PropTypes.string,
  bigSize: PropTypes.bool,
  smallSize: PropTypes.bool,
  forCards: PropTypes.bool,
  forHeader: PropTypes.bool
};
export default ProfileAvatar;
