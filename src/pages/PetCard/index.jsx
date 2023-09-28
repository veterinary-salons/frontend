import { useParams } from 'react-router-dom';
import clssses from './style.module.scss';
import FormPetCard from '../../components/FormPetCard';
import petList from '../../assets/constants/petList';

const PetCard = () => {
  const { id } = useParams();

  const dataPet = petList.find((item) => item.id === id);

  return (
    <section className={clssses['pet-card']}>
      <FormPetCard dataPet={dataPet} />
    </section>
  );
};

export default PetCard;
