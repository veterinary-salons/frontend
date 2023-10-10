import classes from './style.module.scss';
import NotificationMessage from '../../components/NotificationMessage';

const AdvertSuccess = () => (
  <section className={classes.success}>
    <NotificationMessage
      imageNumber="5"
      title="Объявление опубликовано"
      text="Вы всегда можете внести изменения в ваше объявление в своем профиле"
      to="/profile"
      buttonText="Мой профиль"
    />
  </section>
);

export default AdvertSuccess;
