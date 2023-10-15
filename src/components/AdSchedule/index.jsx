import PropTypes from 'prop-types';
import ScheduleDay from '../ScheduleDay';
import ReceptionSelectionBlock from '../ReceptionSelectionBlock';
import classes from './style.module.scss';
import { arrAdSchedule } from '../../assets/constants/filters';

const AdSchedule = ({
  days,
  setDays,
  serviceTime,
  durationService,
  setDurationService,
}) => (
  <>
    <fieldset className={classes.schedule__fieldset}>
      <div className={classes.schedule__container}>
        {arrAdSchedule.map((i) => (
          <ScheduleDay
            key={i.id}
            type={i.type}
            value={days}
            getGraph={setDays}
          />
        ))}
      </div>
    </fieldset>
    {serviceTime && (
      <div>
        <ReceptionSelectionBlock
          category="checkboxTime"
          getCheckbox={setDurationService}
          values={durationService}
        />
      </div>
    )}
  </>
);

AdSchedule.propTypes = {
  serviceTime: PropTypes.bool,
  days: PropTypes.shape({}),
  durationService: PropTypes.shape({}),
  setDays: PropTypes.func,
  setDurationService: PropTypes.func,
};

AdSchedule.defaultProps = {
  serviceTime: true,
  days: {},
  setDays: () => {},
  durationService: {},
  setDurationService: () => {},
};

export default AdSchedule;
