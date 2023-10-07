// Страница карточки специалиста
import { useParams } from 'react-router-dom';
import { professionals } from '../../assets/constants/temporaryData';
// import classes from './style.module.scss';
import SpecialistAdvertCardServices from '../../components/SpecialistAdvertCardServices';

const SpecialistAdvertCardFullInfo = () => {
  const { id } = useParams();

  const specialistInfo = professionals.find((item) => item.id === id);

  return (
    <>
      <SpecialistAdvertCardServices SpecialistData={specialistInfo}/>
      
      <p>здесь еще раписание</p>
    </>
  );
};

export default SpecialistAdvertCardFullInfo;
