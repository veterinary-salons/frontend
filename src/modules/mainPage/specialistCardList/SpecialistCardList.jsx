import style from './SpecialistCardList.module.scss';
import SpecialistCard from '../specialistCard/SpecialistCard';
import imgGroomer from '../../../assets/images/icon/specialists/groomers.svg';
import imgVets from '../../../assets/images/icon/specialists/vets.svg';
import imgPetSitters from '../../../assets/images/icon/specialists/pet-sitters.svg';
import imgDogHandlers from '../../../assets/images/icon/specialists/dog-handlers.svg';

const SpecialistCardList = () => (
    <ul className={style.cards}>
        <SpecialistCard
            color='blue'
            title='Грумеры'
            img={imgGroomer}
        />
        <SpecialistCard
            title='Ветеринары'
            color='yellow'
            img={imgVets}
        />
        <SpecialistCard
            color='green'
            title='Зооняни'
            img={imgPetSitters}
        />
        <SpecialistCard
            color='violet'
            title='Кинологи'
            img={imgDogHandlers}
        />
    </ul>
);

export default SpecialistCardList;