import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './style.module.scss';

import ProfileUserData from '../../components/ProfileUserData';
import FormEditProfile from '../../components/FormEditProfile';
import LogoutConfirmationPopup from '../../components/LogoutConfirmationPopup';

const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // для демонстрации работы изменения данных профиля
  const [userData, setUserData] = useState({
    name: 'Ася',
    surname: 'Малинина',
    tel: '8(918) 566-78-49',
    address: 'г. Москва, ул. Гагарина, д. 6, кв. 145',
    email: 'asyam1998cat@mail.ru',
    password: '1234567f',
  });

  const handleClickEditProfile = () => {
    setIsEditProfile(true);
  };

  const handleClickExitProfile = () => {
    setIsOpen(true);
  };

  const handleCloseConfirmPopup = () => {
    setIsOpen(false);
  };

  const handleSubmitForm = () => {
    setIsEditProfile(false);
  };

  return (
      <section className={classes.profile}>
      <LogoutConfirmationPopup isOpen={isOpen} onClose={handleCloseConfirmPopup}/>
        {!isEditProfile ? (
          <ProfileUserData
            handleEditProfile={handleClickEditProfile}
            handleExitProfile={handleClickExitProfile}
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
