import ServiceBookingCardList from '../../components/ServiceBookingCardList';
import classes from './style.module.scss';

// это тут потому что данные будут получаться в этом файле
// и чтобы не создавать дополнительный файл констант а можно было потом просто тут удалить
const dataBooking = [
  {
    id: '1',
    type: 'forMe',
    status: 'done',
    subjectName: 'Морозова Елена',
    serviceName: 'Груминг',
    serviceDate: '13.04.2023',
    price: '4 000',
  },
  {
    id: '2',
    type: 'forMe',
    status: 'canceled',
    subjectName: 'Морозова Елена',
    serviceName: 'Груминг',
    serviceDate: '13.04.2023',
    price: '4 000',
  },
  {
    id: '3',
    type: 'forMe',
    status: 'canceled',
    subjectName: 'Морозова Елена',
    serviceName: 'Груминг',
    serviceDate: '13.04.2023',
    price: '4 000',
  },
  {
    id: '4',
    type: 'forMe',
    status: 'done',
    subjectName: 'Морозова Елена',
    serviceName: 'Груминг',
    serviceDate: '13.04.2023',
    price: '4 000',
  },
];

const ProfileServicesHistoryList = () => (
  <section className={classes.history}>
    <h2 className={classes.history__title}>История</h2>
    <ServiceBookingCardList dataBooking={dataBooking} />
  </section>
);

export default ProfileServicesHistoryList;
