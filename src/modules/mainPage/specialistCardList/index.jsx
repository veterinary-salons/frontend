// TODO: добавить ссылки на грумерови других...
import style from './style.module.scss';
import SpecialistCardMainPage from '../specialistCard/index';
import imgGroomer from '../../../assets/images/icon/specialists/groomers.svg';
import imgVets from '../../../assets/images/icon/specialists/vets.svg';
import imgPetSitters from '../../../assets/images/icon/specialists/pet-sitters.svg';
import imgDogHandlers from '../../../assets/images/icon/specialists/dog-handlers.svg';

const SpecialistCardListMainPage = () => (
  <section className={style.specialists}>
    <h2 className={style.specialists__title}>Они любят и знают своё дело</h2>
    <ul className={style.specialists__cards}>
      <SpecialistCardMainPage color="blue" title="Грумеры" img={imgGroomer} link='/services'/>
      <SpecialistCardMainPage title="Ветеринары" color="yellow" img={imgVets} link='/services'/>
      <SpecialistCardMainPage color="green" title="Зооняни" img={imgPetSitters} link='/services'/>
      <SpecialistCardMainPage color="violet" title="Кинологи" img={imgDogHandlers} link='/services'/>
    </ul>
  </section>
);

export default SpecialistCardListMainPage;
