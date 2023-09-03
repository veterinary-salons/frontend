import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './style.module.scss';

import ProfileUserData from '../../components/ProfileUserData';
import FormEditProfile from '../../components/FormEditProfile';

const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  // для демонстрации работы изменения данных профиля
  // const [userData, setUserData] = useState({});

  const handleClicEditProfile = () => {
    setIsEditProfile(true);
  };

  const handleClicExitProfile = () => {};

  const handleSubmitForm = () => {
    setIsEditProfile(false);
  };

  return (
    <section className={classes.profile}>
      {!isEditProfile ? (
        <ProfileUserData
          handleEditProfile={handleClicEditProfile}
          handleExitProfile={handleClicExitProfile}
        />
      ) : (
        <FormEditProfile handleSubmitForm={handleSubmitForm} />
      )}
      <Outlet />
    </section>
  );
};

export default Profile;
