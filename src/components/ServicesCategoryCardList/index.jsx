// список карточек специалиста на главной страницы услуг

import PropTypes from 'prop-types';
import classes from '../../pages/Main/Main.module.scss';
import ServicesCategoryCard from '../ServicesCategoryCard';
import imgPetSitters from '../../assets/images/images/category-specialist-card/pet-sitters.svg';

const ServicesCategoryCardList = ({ specialistsList, marginT, isServicesPage }) => (
  <ul className={classes.specialists__cards} style={{marginTop: marginT}}>
    {specialistsList.map((item) => (
      <ServicesCategoryCard
        key={item.value}
        color={item.color}
        title={item.label}
        img={item.img}
        link={isServicesPage ? `${item.value}` : `/services/${item.value}`}
        isServicesPage={isServicesPage}
      />
    ))}
  </ul>
);

ServicesCategoryCardList.propTypes = {
  specialistsList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      color: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
  marginT: PropTypes.string,
  isServicesPage: PropTypes.bool,
};

ServicesCategoryCardList.defaultProps = {
  specialistsList: {
    label: 'Зоо-няня',
    value: 'pet-sitter',
    color: 'violet',
    img: imgPetSitters,
  },
  marginT: '0px',
  isServicesPage: false,
};

export default ServicesCategoryCardList;
