import PropTypes from 'prop-types';
import classes from './style.module.scss';

const OpenHours = ({ array }) => (
  <div className={classes.schedule}>
    <h4 className={classes.schedule__title}>Расписание</h4>
    <div className={classes.schedule__container}>
      {array.map((i) =>
        i.work === false ? (
          <div className={classes.schedule__box} key={i.id}>
            <p className={classes.schedule__text}>{i.day}</p>
            <p className={classes.schedule__text}>выходной</p>
          </div>
        ) : (
          i.work === true && (
            <div className={classes.schedule__box} key={i.id}>
              <p className={classes.schedule__text}>{i.day}</p>
              {i.aroundClock ? (
                <p className={classes.schedule__text}>круглосуточно</p>
              ) : (
                <p
                  className={classes.schedule__text}
                >{`${i.begin} - ${i.end}`}</p>
              )}
            </div>
          )
        ),
      )}
    </div>
  </div>
);

OpenHours.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      day: PropTypes.string,
      begin: PropTypes.string,
      end: PropTypes.string,
      aroundClock: PropTypes.bool,
    }),
  ).isRequired,
};

export default OpenHours;
