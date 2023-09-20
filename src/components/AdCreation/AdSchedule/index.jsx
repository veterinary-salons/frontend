import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScheduleDay from '../../ScheduleDay';
import ReceptionSelectionBlock from '../../ReceptionSelectionBlock';
import classes from './style.module.scss';
import Button from '../../../ui/buttons/originButton/Button';
import { arrAdSchedule } from '../../../assets/constants/filters';

const AdSchedule = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [values, setValues] = useState({});

  const handleFormChange = useCallback(
    (value) => {
      setValues({
        ...values,
        ...value,
      });
    },
    [setValues, values],
  );

  console.log(data);

  return (
    <div className={classes.schedule}>
      <fieldset className={classes.schedule__fieldset}>
        <h2 className={classes.schedule__title}>Укажите ваши рабочие часы</h2>
        <div className={classes.schedule__container}>
          {arrAdSchedule.map((i) => (
            <ScheduleDay
              key={i.id}
              type={i.type}
              value={data}
              getGraph={setData}
            />
          ))}
        </div>
      </fieldset>
      <div>
        <ReceptionSelectionBlock
          category="checkboxTime"
          getCheckbox={handleFormChange}
          values={values}
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
