// Страница карточки специалиста
import { useParams, Outlet } from 'react-router-dom';
import { professionals } from '../../assets/constants/temporaryData';
import classes from './style.module.scss';
import SpecialistAdvertCardInfo from '../../components/SpecialistAdvertCardInfo';
// import SpecialistAdvertCardServices from '../../components/SpecialistAdvertCardServices';


// Карточка специалиста
const SpecialistAdvertCard = () => {
  const { id } = useParams();

  const specialistInfo = professionals.find((item) => item.id === id);

  return (
    
      <section className={classes['advert-card']}>
        <SpecialistAdvertCardInfo SpecialistData={specialistInfo} />
        {/* <SpecialistAdvertCardServices SpecialistData={specialistInfo}/> */}
        <Outlet />
      </section>
    
  );
};

export default SpecialistAdvertCard;
