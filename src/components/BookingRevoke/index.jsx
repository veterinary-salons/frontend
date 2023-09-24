import PropTypes from 'prop-types';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

const BookingRevoke = ({ dataBooking }) => {
  const { specialist, service, price, date, place, pet, wishes } = dataBooking;

  return (
    <>
      <ul className={classes['booking-remove']}>
        <li className={classes['booking-remove__item']}>
          <h4 className={classes['booking-remove__title']}>Специалист</h4>
          <p className={classes['booking-remove__descr']}>{specialist}</p>
        </li>
        <li className={classes['booking-remove__item']}>
          <h4 className={classes['booking-remove__title']}>Услуга</h4>
          <p
            className={classes['booking-remove__descr']}
          >{`${service} ${price}`}</p>
        </li>
        <li className={classes['booking-remove__item']}>
          <h4 className={classes['booking-remove__title']}>Дата и время</h4>
          <p className={classes['booking-remove__descr']}>{date}</p>
        </li>
        <li className={classes['booking-remove__item']}>
          <h4 className={classes['booking-remove__title']}>Место</h4>
          <p className={classes['booking-remove__descr']}>{place}</p>
        </li>
        <li className={classes['booking-remove__item']}>
          <h4 className={classes['booking-remove__title']}>Питомец</h4>
          <p className={classes['booking-remove__descr']}>{pet}</p>
        </li>
        <li className={classes['booking-remove__item']}>
          <h4 className={classes['booking-remove__title']}>Пожелания</h4>
          <p className={classes['booking-remove__descr']}>{wishes}</p>
        </li>
      </ul>
      <div className={classes['button-wrapper']}>
        <Button onClick={() => {}} size="medium" variant="outlined">
          Отменить бронирование
        </Button>
      </div>
    </>
  );
};

BookingRevoke.propTypes = {
  dataBooking: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookingRevoke;
