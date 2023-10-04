import { useParams } from 'react-router-dom';
import classes from './style.module.scss';
import FormPetCard from '../../components/FormPetCard';
import petList from '../../assets/constants/petList';

const PetCard = () => {
  const { id } = useParams();

  const dataPet = petList.find((item) => item.id === id);

  return (
    <section className={classes['pet-card']}>
      <FormPetCard dataPet={dataPet} />
    </section>
  );
};

export default PetCard;
