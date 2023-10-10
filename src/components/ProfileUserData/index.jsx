import PropTypes from 'prop-types';
import classes from './style.module.scss';

import ProfileAvatar from '../../ui/profileAvatar';
import UserContacts from '../../ui/userContacts';
import Button from '../../ui/buttons/originButton/Button';

const ProfileUserData = ({
  handleEditProfile,
  handleExitProfile,
  userData,
}) => (
  <section className={classes.profile}>
    <div className={classes['profile__data-wrapper']}>
      <div className={classes['profile__avatar-wrapper']}>
        <ProfileAvatar src={userData.src} />
        <h2 className={classes['profile__data-title']}>
          {userData.name} {userData.surname}
        </h2>
      </div>
      <div className={classes['profile__contacts-wrapper']}>
        <UserContacts title="Адрес:" subtitle={userData.address} />
        <UserContacts title="Номер телефона:" subtitle={userData.tel} />
        <UserContacts title="Почта:" subtitle={userData.email} />
        {userData.outcall ? (
          <UserContacts
            title="Выезд к клиентам:"
            subtitle={userData.outcall?.join(' ')}
          />
        ) : null}
      </div>
      <Button onClick={handleEditProfile} size="medium" variant="outlined">
        Изменить мои данные
      </Button>
    </div>
    <Button
      onClick={handleExitProfile}
      size="medium"
      variant="outlined"
      isMaxWidth
    >
      Выйти из профиля
    </Button>
  </section>
);

ProfileUserData.propTypes = {
  handleEditProfile: PropTypes.func.isRequired,
  handleExitProfile: PropTypes.func.isRequired,
  // userData: PropTypes.objectOf(PropTypes.string).isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    tel: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    src: PropTypes.string,
    outcall: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProfileUserData;
