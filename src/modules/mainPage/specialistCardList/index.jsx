import style from './style.module.scss';
import ServicesList from '../../../pages/ServicesList';

const SpecialistCardListMainPage = () => (
  <section className={style.specialists}>
    <h2 className={style.specialists__title}>Они любят и знают своё дело</h2>
    <ServicesList />
  </section>
);

export default SpecialistCardListMainPage;
