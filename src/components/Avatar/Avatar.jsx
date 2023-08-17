import PropTypes from 'prop-types';
import avatar from '../../assets/image/icon40/Avatar.svg';
import './Avatar.scss';

const Avatar = ({ img, style }) => (
  <img className="avatar" alt="avatar" style={style} src={img || avatar} />
);

Avatar.propTypes = {
  img: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object]),
};

Avatar.defaultProps = {
  img: avatar,
  style: {},
};

export default Avatar;
