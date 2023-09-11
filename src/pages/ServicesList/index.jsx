// Главная страница вкладки "Услуги"
import PropTypes from 'prop-types';
import ServicesCategoryCardList from '../../components/ServicesCategoryCardList';
import classes from './style.module.scss';
import { filterServicesData } from '../../assets/constants/filters';

const ServicesList = ({ isServicesPage }) => {
  const specialistsList = filterServicesData.specialists.options;
  return (
    <section className={classes.services}>
      <ServicesCategoryCardList specialistsList={specialistsList} isServicesPage={isServicesPage}/>
    </section>
  );
};

ServicesList.propTypes = {
  isServicesPage: PropTypes.bool,
};

ServicesList.defaultProps = {
  isServicesPage: false,
};

export default ServicesList;
