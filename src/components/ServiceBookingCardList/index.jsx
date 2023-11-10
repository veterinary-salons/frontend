import PropTypes from 'prop-types';
import classes from './style.module.scss';
import ServiceBookingCard from '../ServiceBookingCard';

const ServiceBookingCardList = ({ dataBooking }) => {
  const createBookingList = dataBooking?.map((booking) => (
    <li key={booking.id} className={classes.list__item}>
      <ServiceBookingCard {...booking} />
    </li>
  ));

  return <ul className={classes.list}>{createBookingList}</ul>;
};

ServiceBookingCardList.propTypes = {
  dataBooking: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

ServiceBookingCardList.defaultProps = {
  dataBooking: {},
};

export default ServiceBookingCardList;
