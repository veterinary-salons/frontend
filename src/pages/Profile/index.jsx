import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import classes from './style.module.scss';

import ProfileUserData from '../../components/ProfileUserData';
import FormEditProfile from '../../components/FormEditProfile';

const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const navigate = useNavigate();
  // для демонстрации работы изменения данных профиля
  const [userData, setUserData] = useState({
    name: 'Ася',
    surname: 'Малинина',
    tel: '8(918) 566-78-49',
    address: 'г. Москва, ул. Гагарина, д. 6, кв. 145',
    email: 'asyam1998cat@mail.ru',
    password: '1234567f',
  });

  const handleClicEditProfile = () => {
    setIsEditProfile(true);
  };

  const handleClicExitProfile = () => {
    localStorage.clear('auth');
    navigate('/', { replace: true });
  };

  const handleSubmitForm = () => {
    setIsEditProfile(false);
  };

  return (
    <section className={classes.profile}>
      {!isEditProfile ? (
        <ProfileUserData
          handleEditProfile={handleClicEditProfile}
          handleExitProfile={handleClicExitProfile}
          userData={userData}
        />
      ) : (
        <FormEditProfile
          handleSubmitForm={handleSubmitForm}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      <Outlet />
    </section>
  );
};

export default Profile;
