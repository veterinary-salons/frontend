// Страница карточки специалиста
import { useParams } from 'react-router-dom';
import { professionals } from '../../assets/constants/temporaryData';
import classes from './style.module.scss';
import SectionSubtitle from '../../components/SectionSubtitle';
import SpecialistAdvertCardServices from '../../components/SpecialistAdvertCardServices';

const SpecialistAdvertCardFullInfo = () => {
  const { id } = useParams();

  const specialistInfo = professionals.find((item) => item.id === id);

  return (
    <>
      <SpecialistAdvertCardServices SpecialistData={specialistInfo} />
      <SectionSubtitle title="Расписание" />
      <div className={classes['advert-card__schedule']}>
        {specialistInfo.schedule.map((day) => (
          <label className={classes['advert-card__schedule-label']}>
            <p>{day.day}</p>
            <p>
              {day.time.start !== 'круглосуточно' &&
              day.time.start !== 'выходной'
                ? `${day.time.start} - ${day.time.end}`
                : day.time.start}
            </p>{' '}
          </label>
        ))}
      </div>
      
      <p>здесь еще раписание</p>
    </>
  );
};

export default SpecialistAdvertCardFullInfo;
