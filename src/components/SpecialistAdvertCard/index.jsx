// import PropTypes from 'prop-types';
// import classes from './style.module.scss';
import { professionals } from '../../assets/constants/temporaryData';
import SpecialistAdvertCardInfo from '../SpecialistAdvertCardInfo';

const SpecialistAdvertCard = () => {
  // const handleButtonClick = (e) => {
  //   e.preventDefault();
  // }
  // const info = [
  //   specialistInfo.profession, 
  //   specialistInfo.name,
  //   specialistInfo.workedWith 
  // ]

  const info = professionals;

  return (
    <>
      <SpecialistAdvertCardInfo info={info}/>    
      <p>ssss</p>
    </> 
  );
};

SpecialistAdvertCard.propTypes = {
  
};

SpecialistAdvertCard.defaultProps = {
  
};

export default SpecialistAdvertCard;
