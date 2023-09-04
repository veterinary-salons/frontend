import PropTypes from 'prop-types';
import classes from './style.module.scss';

import ProfileAvatar from '../../ui/profileAvatar';
import UserContacts from '../../ui/userContacts';
import Button from '../../ui/buttons/originButton/Button';
import avatar from '../../assets/images/icon/avatar/img-avatar.svg';

const ProfileUserData = ({
  handleEditProfile,
  handleExitProfile,
  userData,
}) => (
  <section className={classes.profile}>
    <div className={classes['profile__data-wrapper']}>
      <div className={classes['profile__avatar-wrapper']}>
        <ProfileAvatar src={avatar} />
        <h2 className={classes['profile__data-title']}>
          {userData.name} {userData.surname}
        </h2>
      </div>
      <div className={classes['profile__contacts-wrapper']}>
        <UserContacts title="Адрес:" subtitle={userData.address} />
        <UserContacts title="Номер телефона:" subtitle={userData.tel} />
        <UserContacts title="Почта:" subtitle={userData.email} />
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
  userData: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProfileUserData;
