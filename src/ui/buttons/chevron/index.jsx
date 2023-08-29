import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.modules.scss';

const ChevronButton = ({ direction, onClick }) => {
  const chevronClassName = classNames('chevron-button');

  return (
    <button className={chevronClassName} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
        <path
          stroke="#0F0F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d={direction === 'up' ? 'M12 10.5L9 7.5 6 10.5' : 'M12 7.5L9 10.5 6 7.5'}
        />
      </svg>
    </button>
  );
};

ChevronButton.propTypes = {
  direction: PropTypes.oneOf(['up', 'down']),
  onClick: PropTypes.func.isRequired,
};

ChevronButton.defaultProps = {
    direction: 'up'
};

export default ChevronButton;
