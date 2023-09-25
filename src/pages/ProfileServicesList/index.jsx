import classNames from 'classnames';
import ServiceBookingCardList from '../../components/ServiceBookingCardList';
import classes from './style.module.scss';

import NotificationMessage from '../../components/NotificationMessage';

// это тут потому что данные будут получаться в этом файле
// и чтобы не создавать дополнительный файл констант а можно было потом просто тут удалить
const dataBooking = [
  {
    id: '1',
    type: 'forMe',
    status: 'inProgress',
    subjectName: 'Морозова Елена',
    serviceName: 'Груминг',
    serviceDate: '13.04.2023',
    price: '4 000',
  },
  {
    id: '2',
    type: 'forMe',
    status: 'inProgress',
    subjectName: 'Морозова Елена',
    serviceName: 'Груминг',
    serviceDate: '13.04.2023',
    price: '4 000',
  },
  {
    id: '3',
    type: 'forMe',
    status: 'inProgress',
    subjectName: 'Морозова Елена',
    serviceName: 'Груминг',
    serviceDate: '13.04.2023',
    price: '4 000',
  },
  {
    id: '4',
    type: 'forMe',
    status: 'inProgress',
    subjectName: 'Морозова Елена',
    serviceName: 'Груминг',
    serviceDate: '13.04.2023',
    price: '4 000',
  },
];

const ProfileServicesList = () => {
  const isDataBooking = Object.keys(dataBooking).length !== 0;
  return (
    <section
      className={classNames(
        isDataBooking ? classes.services : classes.notification,
      )}
    >
      {isDataBooking ? (
        <ServiceBookingCardList dataBooking={dataBooking} />
      ) : (
        <NotificationMessage
          imageNumber="12"
          title="Вы пока не забронировали услугу "
          text="А жаль, ведь у нас очень много профессионалов
                    с широким спектром услуг"
          to="/services"
          buttonText="Забронировать услугу"
        />
      )}
    </section>
  );
};

export default ProfileServicesList;
