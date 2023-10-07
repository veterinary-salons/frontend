// Страница карточки специалиста
import { useParams } from 'react-router-dom';
import { professionals } from '../../assets/constants/temporaryData';
// import classes from './style.module.scss';
import SectionSubtitle from '../../components/SectionSubtitle';
import SpecialistAdvertCardServices from '../../components/SpecialistAdvertCardServices';
import ScheduleButton from '../../ui/buttons/scheduleButton';

const SpecialistAdvertCardFullInfo = () => {
  const { id } = useParams();

  const specialistInfo = professionals.find((item) => item.id === id);

  return (
    <>
      <SpecialistAdvertCardServices SpecialistData={specialistInfo}/>
      <SectionSubtitle title="Расписание" />

      <ScheduleButton variant='dayMonth'/>
      <p>здесь еще раписание</p>
    </>
  );
};

export default SpecialistAdvertCardFullInfo;
