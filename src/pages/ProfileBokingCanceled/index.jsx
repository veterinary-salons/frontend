import NotificationMessage from '../../components/NotificationMessage';
import classes from './style.module.scss';

const ProfileBokingCanceled = () => (
  <section className={classes.canceled}>
    <NotificationMessage
      imageNumber="9"
      title="Бронирование отменено"
      text="Но вы всегда можете найти другого специалиста или заказать вкусняшки своему питомцу"
      to="/services"
      buttonText="Забронировать услугу"
    />
  </section>
);

export default ProfileBokingCanceled;
