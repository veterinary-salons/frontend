import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './style.module.scss';
import ArrowDown from '../../icons/arrows/arrowDown/ArrowDown';

const ScheduleButtons = ({
  action,
  disabled,
  variant,
  time,
  dayWeek,
  dayMonth,
  onClick,
}) => {
  const getClassBtn = cn(
    classes['schedule-buttons'],
    {
      [classes['schedule-buttons_disabled']]: disabled,
    },
    { [classes['schedule-buttons_action']]: action },
  );

  return (
    <button
      disabled={disabled}
      onClick={() => onClick(action)}
      className={getClassBtn}
    >
      {variant === 'dayMonth' && (
        <div className={classes['schedule-buttons__box-text']}>
          <p className={classes['schedule-buttons__text']}>{dayWeek}</p>
          <p className={classes['schedule-buttons__text']}>{dayMonth}</p>
        </div>
      )}
      {variant === 'time' && (
        <p className={classes['schedule-buttons__text']}>{time}</p>
      )}
      {variant === 'arrow' && <ArrowDown positionDropdown={false} />}
    </button>
  );
};

ScheduleButtons.propTypes = {
  variant: PropTypes.oneOf(['time', 'dayMonth', 'arrow']),
  disabled: PropTypes.bool,
  time: PropTypes.string,
  dayWeek: PropTypes.string,
  dayMonth: PropTypes.string,
  action: PropTypes.bool,
  onClick: PropTypes.func,
};

ScheduleButtons.defaultProps = {
  disabled: false,
  variant: 'dayMonth',
  time: '11:00',
  dayWeek: 'Пт',
  dayMonth: '1 сент',
  action: false,
  onClick: () => {},
};

export default ScheduleButtons;
