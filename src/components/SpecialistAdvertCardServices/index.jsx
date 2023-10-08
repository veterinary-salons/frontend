import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import classNames from 'classnames';
import classes from './style.module.scss';
import SectionSubtitle from '../SectionSubtitle';

const SpecialistAdvertCardServices = ({ SpecialistData, isBooking }) => {
  // const handleButtonClick = (e) => {
  //   e.preventDefault();
  // }
  const [selectedService, setSelectedService] = useState('');
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const itemClasses = (service) =>
  classNames(classes['card-services__item'], {
    [classes['card-services__item_booking']]: isBooking,
    [classes['card-services__item_active']]: selectedService === service,
  });

  const listClasses = classNames(
    classes['card-services__list'], 
    { [classes['card-services__list_booking']]: isBooking }
  );

  // eslint-disable-next-line no-unused-vars
  const img = '';

  const formatPrice = (price) => price.toLocaleString('ru-RU');

  return (
    <div className={classes['card-services']}>
      <SectionSubtitle title={isBooking ? "Выберите услугу" : "Услуги"} />
      <ul className={listClasses}>
      {!isBooking ? 
        SpecialistData.services.map((service) => (
          <li key={uuidv4()} className={itemClasses(service)}>
            <p>{service.title}</p>
            <p>{`от ${formatPrice(
              service.price[0],
            )} до ${formatPrice(service.price[1])} ₽/усл.`}</p>
          </li>
        ))
       : 
      
        SpecialistData.services.map((service) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li key={service.title} onClick={() => handleServiceClick(service)}>
            <div
              className={itemClasses(service)}
              role="radio"
              aria-checked={selectedService === service}
              tabIndex={0} // Добавляем этот атрибут, чтобы элемент стал интерактивным
              onClick={() => handleServiceClick(service)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleServiceClick(service);
                }
              }}
            >
              <p>{service.title}</p>
              <p>{`от ${formatPrice(
                service.price[0],
              )} до ${formatPrice(service.price[1])} ₽/усл.`}</p>
            </div>
          </li>
        ))
      }
      </ul>
    </div>
  );
};

SpecialistAdvertCardServices.propTypes = {
  SpecialistData: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    profession: PropTypes.string,
    price: PropTypes.string,
    workedWith: PropTypes.string,
    description: PropTypes.string,
    numReviews: PropTypes.number,
    scoreReview: PropTypes.string,
    specialist: PropTypes.string,
    isHomeVisit: PropTypes.bool,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.arrayOf(PropTypes.number),
      }),
    ),
    schedule: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        time: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            start: PropTypes.string,
            end: PropTypes.string,
          }),
        ]),
      }),
    ),
  }),
  isBooking: PropTypes.bool,
};

SpecialistAdvertCardServices.defaultProps = {
  SpecialistData: {
    id: '2',
    img: 'https://vetandlife.ru/wp-content/uploads/2022/08/%D0%B3%D1%80%D1%83%D0%BC%D0%B5%D1%80-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0.jpg',
    name: 'Ирина',
    profession: 'Грумер на дом, стрижка, вычес',
    price: '2 500 ₽/усл',
    workedWith: 'собаками и кошками',
    description:
      'Предоставляю услуги груминга с выездом на дом. Шерсть вашего питомца всегда будет в отличном состоянии.',
    numReviews: 5,
    scoreReview: '4.9',
    specialist: 'groomer',
    isHomeVisit: true,
    services: [
      {
        title: 'Выставочный груминг',
        price: [1500, 5000],
      },
      {
        title: 'Гигиеничный груминг',
        price: [1000, 3000],
      },
    ],
    schedule: [
      {
        day: 'Пн',
        time: '10:00 - 16:00',
      },
      {
        day: 'Вт',
        time: 'круглосуточно',
      },
      {
        day: 'Ср',
        time: '10:00 - 16:00',
      },
      {
        day: 'Чт',
        time: 'выходной',
      },
      {
        day: 'Пт',
        time: '10:00 - 16:00',
      },
      {
        day: 'Сб',
        time: 'круглосуточно',
      },
      {
        day: 'Вс',
        time: '10:00 - 16:00',
      },
    ],
  },
  isBooking: false,
};

export default SpecialistAdvertCardServices;
