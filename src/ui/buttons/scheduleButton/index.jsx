import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './style.module.scss';
import ArrowDown from '../../icons/arrows/arrowDown/ArrowDown';
import ArrowUp from '../../icons/arrows/arrowUp/ArrowUp';

const ScheduleButton = ({
  active,
  disabled,
  variant,
  time,
  dayWeek,
  dayMonth,
  onClick,
}) => {
  const getClassBtn = cn(classes['schedule-buttons'], {
    [classes['schedule-buttons_disabled']]: disabled,
    [classes['schedule-buttons_active']]: active,
    [classes['schedule-buttons__time']]: time,
    [classes['schedule-buttons__dayMonth']]: dayMonth,
  });

  const classesP = cn(
    classes['schedule-buttons__text'], {
  })

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={getClassBtn}
      type="button"
    >
      {variant === 'dayMonth' && (
        <div>
          <p className={classesP}>{dayWeek}</p>
          <p className={classesP}>{dayMonth}</p>
        </div>
      )}
      {variant === 'time' && (
        <p className={classesP}>{time}</p>
      )}
      {variant === 'openMore' && <ArrowDown positionDropdown={false} />}
      {variant === 'close' && <ArrowUp positionDropdown={false} />}
    </button>
  );
};

ScheduleButton.propTypes = {
  variant: PropTypes.oneOf(['time', 'dayMonth', 'close', 'openMore']),
  disabled: PropTypes.bool,
  time: PropTypes.string,
  dayWeek: PropTypes.string,
  dayMonth: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

ScheduleButton.defaultProps = {
  disabled: false,
  variant: 'dayMonth',
  time: '11:00',
  dayWeek: 'Пт',
  dayMonth: '1 сент',
  active: false,
  onClick: () => {},
};

export default ScheduleButton;
