import { Outlet } from 'react-router-dom';
import classes from './style.module.scss';

// import NotificationMessage from '../../components/NotificationMessage';

const ProfileServices = () => (
  <section className={classes.services}>
    <Outlet />
  </section>
);

export default ProfileServices;
