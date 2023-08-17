import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './BtnEye.module.scss';

const BtnEye = ({ onClike, clikeBtnEye }) => (
  <button
    className={cn(style['button-eye'], {
      [style['button-eye_action']]: clikeBtnEye,
    })}
    onClick={onClike}
    aria-label="Mute volume"
    type="button"
  />
);

BtnEye.propTypes = {
  clikeBtnEye: PropTypes.bool,
  onClike: PropTypes.func,
};

BtnEye.defaultProps = {
  clikeBtnEye: false,
  onClike: () => {},
};

export default BtnEye;
