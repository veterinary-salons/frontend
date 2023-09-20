import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScheduleDay from '../../ScheduleDay';
import ReceptionSelectionBlock from '../../ReceptionSelectionBlock';
import classes from './style.module.scss';
import Button from '../../../ui/buttons/originButton/Button';
import { arrAdSchedule } from '../../../assets/constants/filters';

const AdSchedule = () => {
  const navigate = useNavigate();
  const [days, setDays] = useState({});
  const [session, setSession] = useState({});
  const [infoSchedule, setInfoSchedule] = useState({});

  console.log(infoSchedule);

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
      <div>
        <ReceptionSelectionBlock
          category="checkboxTime"
          getCheckbox={handleFormChange}
          values={session}
        />
      </div>
      <div className={classes['schedule__container-btn']}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            navigate('/back', { replace: true });
          }}
        >
          Назад
        </Button>
        <Button
          size="small"
          onClick={() => {
            navigate('/next', { replace: true });
          }}
        >
          Далее
        </Button>
      </div>
    </div>
  );
};

export default AdSchedule;
