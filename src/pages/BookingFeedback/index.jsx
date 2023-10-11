import NotificationMessage from '../../components/NotificationMessage';
import classes from './style.module.scss';

const BookingFeedback = () => (
  <section className={classes.feedback}>
    <NotificationMessage
      imageNumber="12"
      title="Эта страница находиться в разработке "
      text="А пока вы можете воспользоваться другими нашими услугами"
      to="/services"
      buttonText="Забронировать услугу"
    />
  </section>
);

export default BookingFeedback;
