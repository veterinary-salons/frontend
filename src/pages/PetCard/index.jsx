import clssses from './style.module.scss';
import FormEditPetCard from '../../components/FormEditPetCard';

const PetCard = () => (
  <section className={clssses['pet-card']}>
    <FormEditPetCard />
  </section>
);

export default PetCard;
