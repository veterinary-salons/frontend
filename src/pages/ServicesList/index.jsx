// Главная страница вкладки "Услуги"
import ServicesCategoryCardList from '../../components/ServicesCategoryCardList';
import classes from './style.module.scss';
import { filterServicesData } from '../../assets/constants/filters';

const ServicesList = () => {
  const specialistsList = filterServicesData.specialists.options;
  return (
    <section className={classes.services}>
      <ServicesCategoryCardList specialistsList={specialistsList}/>
    </section>
  );
};

export default ServicesList;
