import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import ScheduleDay from '../../components/ScheduleDay';
// import ReceptionSelectionBlock from '../../components/ReceptionSelectionBlock';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';
// import { arrAdSchedule } from '../../assets/constants/filters';
import AdSchedule from '../../components/AdSchedule';

const FillingSchedule = ({ getSchedule }) => {
  const navigate = useNavigate();
  const [days, setDays] = useState({});
  const [session, setSession] = useState({});
  const [durationService, setDurationService] = useState({});
  const [infoSchedule, setInfoSchedule] = useState({});

  const handleFormChange = useCallback(
    (value) => {
      setSession({
        ...session,
        ...value,
      });
    },
    [session],
  );

  const path = JSON.parse(localStorage.getItem('veterinarian'));

  const routeBack =
    path.category === 'petSitting'
      ? `/advert-${path.category}-pet`
      : `/advert-${path.category}-services`;

  const handleSchedule = () => {
    handleFormChange();
    navigate('/advert-price', { replace: true });
  };

  useEffect(() => {
    setInfoSchedule({
      session,
      days,
    });
  }, [session, days]);

  useEffect(() => {
    getSchedule(infoSchedule.days);
    // eslint-disable-next-line
  }, [infoSchedule]);

  return (
    <section className={classes['filling-schedule']}>
      <h2 className={classes['filling-schedule__title']}>
        Укажите ваши рабочие часы
      </h2>
      <AdSchedule
        days={days}
        setDays={setDays}
        session={session}
        setSession={setSession}
        durationService={durationService}
        setDurationService={setDurationService}
        serviceTime={false}
      />
      <div className={classes['filling-schedule__container-btn']}>
        <Button
          variant="outlined"
          size="medium"
          type="button"
          onClick={() => {
            navigate(navigate(routeBack), {
              replace: true,
            });
          }}
        >
          Назад
        </Button>
        <Button size="medium" type="button" onClick={handleSchedule}>
          Далее
        </Button>
      </div>
    </section>
  );
};

FillingSchedule.propTypes = {
  getSchedule: PropTypes.func,
};

FillingSchedule.defaultProps = {
  getSchedule: () => {},
};

export default FillingSchedule;
