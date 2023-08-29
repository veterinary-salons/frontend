// import classNames from 'classnames';
import classes from './style.module.scss';

const Profile = () => {
  console.log('profile');
  return (
    <section className={classes.profile}>
      <div className=''>Аватар</div>
      <div>данные профиля</div>
    </section>
  );
};

export default Profile;
