import PropTypes from 'prop-types';
import imgAvatar from '../../../assets/images/icon/avatar/avatar.svg';
import style from './Avatar.module.scss';

const Avatar = ({ img, size }) => (
  <img
    className={style.avatar}
    alt="avatar"
    size={size}
    src={img || imgAvatar}
  />
);

Avatar.propTypes = {
  img: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.object]),
};

Avatar.defaultProps = {
  img: imgAvatar,
  size: {},
};

export default Avatar;
