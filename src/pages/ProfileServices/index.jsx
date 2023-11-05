import { Outlet } from 'react-router-dom';
import classes from './style.module.scss';

// import NotificationMessage from '../../components/NotificationMessage';

const ProfileServices = () => (
  <section className={classes.services}>
    {/* <NotificationMessage
      imageNumber="12"
      title="Вы пока не забронировали услугу "
      text="А жаль, ведь у нас очень много профессионалов
                    с широким спектром услуг"
      to="/services"
      buttonText="Забронировать услугу"
    /> */}
    <Outlet />
  </section>
);

export default ProfileServices;
