import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './BtnEye.module.scss';

const BtnEye = ({ onClike, btnStatus, position }) => (
  <button
    className={cn(
      style['button-eye'],
      {
        [style['button-eye_action']]: btnStatus,
      },
      style[position],
    )}
    onClick={onClike}
    aria-label="Mute volume"
    type="button"
  />
);

BtnEye.propTypes = {
  btnStatus: PropTypes.bool,
  onClike: PropTypes.func,
  position: PropTypes.string,
};

BtnEye.defaultProps = {
  btnStatus: false,
  onClike: () => {},
  position: 'button-eye_position',
};

export default BtnEye;
