import PropTypes from 'prop-types';
import classStyle from './ButtonPlus.module.scss';
import imgBtnPlus from '../../assets/image/icon/btn-plus/btn-plus.svg';

const ButtonPlus = ({ width, height }) => (
  <img
    style={{ width, height }}
    className={classStyle['btn-plus']}
    alt="btn-plus"
    src={imgBtnPlus}
  />
);

ButtonPlus.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

ButtonPlus.defaultProps = {
  width: '40px',
  height: '40px',
};

export default ButtonPlus;
