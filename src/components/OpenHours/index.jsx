import PropTypes from 'prop-types';
import classes from './style.module.scss';

const OpenHours = ({ work, day, aroundClock, begin, end }) => (
  <div className={classes.schedule}>
    {work === false && (
      <div className={classes.schedule__box}>
        <p className={classes.schedule__text}>{day}</p>
        <p className={classes.schedule__text}>выходной</p>
      </div>
    )}
    {work === true && (
      <div className={classes.schedule__box}>
        <p className={classes.schedule__text}>{day}</p>
        {aroundClock ? (
          <p className={classes.schedule__text}>круглосуточно</p>
        ) : (
          <p className={classes.schedule__text}>{`${begin} - ${end}`}</p>
        )}
      </div>
    )}
  </div>
);

OpenHours.propTypes = {
  work: PropTypes.bool,
  day: PropTypes.string,
  aroundClock: PropTypes.bool,
  begin: PropTypes.string,
  end: PropTypes.string,
};

OpenHours.defaultProps = {
  work: true,
  day: 'Пн',
  aroundClock: true,
  begin: '9:00',
  end: '14:00',
};

export default OpenHours;
