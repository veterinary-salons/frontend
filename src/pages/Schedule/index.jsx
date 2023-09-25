import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScheduleDay from '../../components/ScheduleDay';
import ReceptionSelectionBlock from '../../components/ReceptionSelectionBlock';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';
import { arrAdSchedule } from '../../assets/constants/filters';

const AdSchedule = ({ getSchedule, serviceTime }) => {
  const navigate = useNavigate();
  const [days, setDays] = useState({});
  const [session, setSession] = useState({});
  const [infoSchedule, setInfoSchedule] = useState({});

  const handleSchedule = () => {
    getSchedule(infoSchedule);
    navigate('/advert-price', { replace: true });
  };

  const handleFormChange = useCallback(
    (value) => {
      setSession({
        ...session,
        ...value,
      });
    },
    [session],
  );

  useEffect(() => {
    setInfoSchedule({
      session,
      days,
    });
  }, [session, days]);

  return (
    <div className={classes.schedule}>
      <fieldset className={classes.schedule__fieldset}>
        <h2 className={classes.schedule__title}>Укажите ваши рабочие часы</h2>
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
            getCheckbox={handleFormChange}
            values={session}
          />
        </div>
      )}
      <div className={classes['schedule__container-btn']}>
        <Button
          variant="outlined"
          size="medium"
          type="button"
          onClick={() => {
            navigate('/back', { replace: true });
          }}
        >
          Назад
        </Button>
        <Button size="medium" type="button" onClick={handleSchedule}>
          Далее
        </Button>
      </div>
    </div>
  );
};

AdSchedule.propTypes = {
  getSchedule: PropTypes.func,
  serviceTime: PropTypes.bool,
};

AdSchedule.defaultProps = {
  getSchedule: () => {},
  serviceTime: true,
};

export default AdSchedule;
