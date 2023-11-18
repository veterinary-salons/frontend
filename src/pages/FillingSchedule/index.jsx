import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';
import AdSchedule from '../../components/AdSchedule';

const FillingSchedule = () => {
  const navigate = useNavigate();
  const [days, setDays] = useState({});
  const [session, setSession] = useState({});
  const [durationService, setDurationService] = useState({});
  const [infoSchedule, setInfoSchedule] = useState({});

  const local = JSON.parse(localStorage.getItem('veterinarian'));

  localStorage.setItem(
    'veterinarian',
    JSON.stringify({ ...local, workingHours: infoSchedule }),
  );

  const routeBack =
    local.category === 'petSitting'
      ? `/advert-${local.category}-pet`
      : `/advert-${local.category}-services`;

  const handleSchedule = () => {
    navigate('/advert-price', { replace: true });
  };

  useEffect(() => {
    setInfoSchedule({
      days,
    });
  }, [days]);

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

FillingSchedule.propTypes = {};

FillingSchedule.defaultProps = {};

export default FillingSchedule;
