import PropTypes from 'prop-types';
import cn from 'classnames';
import imgArrowUp from '../../assets/image/icon/arrow-up/arrow-up.svg';
import style from './ArrowU.module.scss';

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
  positionDropdown: PropTypes.string,
};

ArrowUp.defaultProps = {
  positionDropdown: 'true',
};

export default ArrowUp;
