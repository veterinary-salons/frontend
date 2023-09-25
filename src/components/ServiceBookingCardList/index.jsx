import classes from './style.module.scss';
import ServiceBookingCard from '../ServiceBookingCard';

const ServiceBookingCardList = () => (
  <ul className={classes.list}>
    <li className={classes.list__item}>
      <ServiceBookingCard
        type="forMe"
        status="inProgress"
        subjectName="Морозова Елена"
        serviceName="Груминг"
        serviceDate="13.04.2023"
        price="4 000"
      />
    </li>
    <li className={classes.list__item}>
      <ServiceBookingCard
        type="forMe"
        status="inProgress"
        subjectName="Морозова Елена"
        serviceName="Груминг"
        serviceDate="13.04.2023"
        price="4 000"
      />
    </li>
    <li className={classes.list__item}>
      <ServiceBookingCard
        type="forMe"
        status="inProgress"
        subjectName="Морозова Елена"
        serviceName="Груминг"
        serviceDate="13.04.2023"
        price="4 000"
      />
    </li>
    <li className={classes.list__item}>
      <ServiceBookingCard
        type="forMe"
        status="inProgress"
        subjectName="Морозова Елена"
        serviceName="Груминг"
        serviceDate="13.04.2023"
        price="4 000"
      />
    </li>
  </ul>
);

export default ServiceBookingCardList;
