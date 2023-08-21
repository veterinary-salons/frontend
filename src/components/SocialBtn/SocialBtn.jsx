import './SocialBtn.scss';
import PropTypes from 'prop-types';

const SocialBtn = ({ img }) => (
  <button className="social-btn" type="button">
    <img className="social-btn__social" alt="social" src={img} />
  </button>
);

SocialBtn.propTypes = {
  img: PropTypes.string,
};

SocialBtn.defaultProps = {
  img: '',
};

export default SocialBtn;
