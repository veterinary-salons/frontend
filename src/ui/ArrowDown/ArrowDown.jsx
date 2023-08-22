import PropTypes from 'prop-types';
import cn from 'classnames';
import imgArrowDown from '../../assets/image/icon/arrow-down/arrow-down.svg';
import style from './ArrowDown.module.scss';

const ArrowDown = ({ positionDropdown, dropdownClick }) => (
  <img
    className={cn(
      style['arrow-down'],
      {
        [style['arrow-down_position']]: positionDropdown,
      },
      { [style['arrow-down_none']]: dropdownClick },
    )}
    src={imgArrowDown}
    alt="стрелка вверх"
  />
);

ArrowDown.propTypes = {
  positionDropdown: PropTypes.string,
  dropdownClick: PropTypes.bool,
};

ArrowDown.defaultProps = {
  positionDropdown: 'ture',
  dropdownClick: true,
};

export default ArrowDown;
