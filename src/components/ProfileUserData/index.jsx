import PropTypes from 'prop-types';
import classes from './style.module.scss';

import ProfileAvatar from '../../ui/profileAvatar';
import UserContacts from '../../ui/userContacts';
import Button from '../../ui/buttons/originButton/Button';

const ProfileUserData = ({ handleEditProfile, handleExitProfile }) => (
  <section className={classes.profile}>
    <div className={classes['profile__data-wrapper']}>
      <div className={classes['profile__avatar-wrapper']}>
        <ProfileAvatar />
        <h2 className={classes['profile__data-title']}>Ася Малинина</h2>
      </div>
      <div className={classes['profile__contacts-wrapper']}>
        <UserContacts
          title="Адрес:"
          subtitle="г. Москва, ул. Гагарина, д. 6, кв. 145"
        />
        <UserContacts title="Номер телефона:" subtitle="+ 7 918 566 78 49" />
        <UserContacts title="Почта:" subtitle="asyam1998cat@mail.ru" />
      </div>
      <Button onClick={handleEditProfile} size="medium" variant="outlined">
        Изменить мои данные
      </Button>
    </div>
    <Button onClick={handleExitProfile} size="medium" variant="outlined">
      Выйти из профиля
    </Button>
  </section>
);

ProfileUserData.propTypes = {
  handleEditProfile: PropTypes.func.isRequired,
  handleExitProfile: PropTypes.func.isRequired,
};

export default ProfileUserData;
