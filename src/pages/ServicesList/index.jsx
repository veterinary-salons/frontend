// Главная страница вкладки "Услуги"

import ServicesCategoryCardList from '../../components/ServicesCategoryCardList';
import classes from './style.module.scss';
import { filterServicesData } from '../../assets/constants/filters';
import SectionTitle from '../../components/SectionTitle';

const ServicesList = () => {
  const specialistsList = filterServicesData.specialists.options;
  return (
    <section className={classes.services}>
      <SectionTitle title="Наши услуги" marginT="48px" />
      <ServicesCategoryCardList specialistsList={specialistsList} marginT='40px'/>
    </section>
  );
};

export default ServicesList;
