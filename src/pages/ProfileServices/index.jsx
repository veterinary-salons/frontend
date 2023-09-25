import classes from './style.module.scss';

// import NotificationMessage from '../../components/NotificationMessage';
import ServiceBookingCardList from '../../components/ServiceBookingCardList';

const ProfileServices = () => (
  <section className={classes.services}>
    <ServiceBookingCardList />
    {/* <NotificationMessage
      imageNumber="12"
      title="Вы пока не забронировали услугу "
      text="А жаль, ведь у нас очень много профессионалов
                    с широким спектром услуг"
      to="/services"
      buttonText="Забронировать услугу"
    /> */}
  </section>
);

export default ProfileServices;
