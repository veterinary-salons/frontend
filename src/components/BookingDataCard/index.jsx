import PropTypes from 'prop-types';
import classes from './style.module.scss';

const fieldData = [
  { key: 'service', title: 'Услуга' },
  // { key: 'price', title: 'Стоимость' }, // TODO: вопрос отправлен на рассмотрение к дизайнерам.
  { key: 'date', title: 'Дата и время' },
  { key: 'place', title: 'Место' },
  { key: 'pet', title: 'Питомец' },
  { key: 'wishes', title: 'Пожелания' },
];

const BookingDataCard = ({ dataBooking, isNotSpecialist }) => {
  const formatPrice = (price) => price.toLocaleString('ru-RU');

  return (
    <ul className={classes['booking-remove']}>
      {!isNotSpecialist && (
        <li className={classes['booking-remove__item']}>
          <h4 className={classes['booking-remove__title']}>Специалист</h4>
          <p className={classes['booking-remove__descr']}>
            {dataBooking.specialist}
          </p>
        </li>
      )}
      {fieldData.map((field) => (
        <li key={field.key} className={classes['booking-remove__item']}>
          <h4 className={classes['booking-remove__title']}>{field.title}</h4>
          <p className={classes['booking-remove__descr']}>
            {field.key === 'service'
              ? `${dataBooking.service} от ${formatPrice(
                  dataBooking.price[0],
                )} до ${formatPrice(dataBooking.price[1])} ₽/усл.`
              : dataBooking[field.key]}
          </p>
        </li>
      ))}
    </ul>
  );
};

BookingDataCard.propTypes = {
  dataBooking: PropTypes.objectOf(PropTypes.string).isRequired,
  isNotSpecialist: PropTypes.bool,
};

BookingDataCard.defaultProps = {
  isNotSpecialist: false,
};

export default BookingDataCard;
