import PropTypes from 'prop-types';
import classes from './style.module.scss';
import ServiceBookingCard from '../ServiceBookingCard';

const ServiceBookingCardList = ({ dataBooking }) => {
  const createBookingList = dataBooking?.map(
    ({ id, type, status, subjectName, serviceName, serviceDate, price }) => (
      <li key={id} className={classes.list__item}>
        <ServiceBookingCard
          type={type}
          status={status}
          subjectName={subjectName}
          serviceName={serviceName}
          serviceDate={serviceDate}
          price={price}
        />
      </li>
    ),
  );

  return <ul className={classes.list}>{createBookingList}</ul>;
};

ServiceBookingCardList.propTypes = {
  dataBooking: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

ServiceBookingCardList.defaultProps = {
  dataBooking: {},
};

export default ServiceBookingCardList;
