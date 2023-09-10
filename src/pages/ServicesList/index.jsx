// Главная страница вкладки "Услуги"
import ServicesCategoryCardList from '../../components/ServicesCategoryCardList';
import { filterServicesData } from '../../assets/constants/filters';

const ServicesList = () => {
  const specialistsList = filterServicesData.specialists.options;
  return <ServicesCategoryCardList specialistsList={specialistsList} />;
};

export default ServicesList;
