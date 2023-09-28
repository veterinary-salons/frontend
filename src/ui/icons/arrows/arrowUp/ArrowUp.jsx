import PropTypes from 'prop-types';
import cn from 'classnames';
import imgArrowUp from '../../../../assets/images/icon/arrow-up/arrow-up.svg';
import style from './ArrowUp.module.scss';

const ArrowUp = ({ positionDropdown }) => (
  <img
    className={cn(style['arrow-up'], {
      [style['arrow-down-up_position']]: positionDropdown,
    })}
    src={imgArrowUp}
    alt="ArrowUp"
  />
);

ArrowUp.propTypes = {
  positionDropdown: PropTypes.bool,
};

ArrowUp.defaultProps = {
  positionDropdown: true,
};

export default ArrowUp;
