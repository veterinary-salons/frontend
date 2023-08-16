import './BtnEye.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

const BtnEye = ({ clikeBtnEye, onClike }) => (
  <button
    className={cn('button-eye', { 'button-eye_action': clikeBtnEye })}
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
