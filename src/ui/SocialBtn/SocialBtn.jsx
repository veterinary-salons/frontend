import PropTypes from 'prop-types';
import style from './SocialBtn.module.scss';

const SocialBtn = ({ img }) => (
  <button className={style['social-btn']} type="button">
    <img className={style['social-btn__social']} alt="social" src={img} />
  </button>
);

SocialBtn.propTypes = {
  img: PropTypes.string,
};

SocialBtn.defaultProps = {
  img: '',
};

export default SocialBtn;
