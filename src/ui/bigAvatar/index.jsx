import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';

const BigAvatar = ({ src, alt, bigSize }) => (
  <div
    className={classNames(
      classes['big-avatar'],
      bigSize ? classes['big-avatar_big'] : null,
    )}
  >
    {src ? (
      <img className={classes['big-avatar__image']} src={src} alt={alt} />
    ) : null}
  </div>
);

BigAvatar.defaultProps = {
  src: null,
  alt: null,
  bigSize: false,
};

BigAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  bigSize: PropTypes.bool,
};
export default BigAvatar;
