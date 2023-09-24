import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import img from '../../assets/images/icon/avatar/img-avatar.svg';

import ProfileUserData from '../../components/ProfileUserData';
import FormEditProfile from '../../components/FormEditProfile';

import Portal from '../../components/Portal';
import QuitConfirmationPopup from '../../components/QuitConfirmationPopup';
import QuitInfotooltipPopup from '../../components/QuitInfotooltipPopup';

const Profile = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(localStorage.getItem('auth'));
  const navigate = useNavigate();
  // для демонстрации работы изменения данных профиля
  const [userData, setUserData] = useState({
    name: 'Ася',
    surname: 'Малинина',
    tel: '8(918) 566-78-49',
    address: 'г. Москва, ул. Гагарина, д. 6, кв. 145',
    email: 'asyam1998cat@mail.ru',
    password: '1234567f',
    src: img,
  });

  const handleEditProfile = () => {
    setIsEditProfile(true);
  };

  const handleExitProfile = () => {
    navigate('/', { replace: true });
  };

  const confirmExitProfile = () => {
    localStorage.clear('auth');
    setIsLogin(false);
  };

  const handleClickExitProfile = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsEditProfile(false);
  };

  return (
    <section className={classes.profile}>
      {!isEditProfile ? (
        <ProfileUserData
          handleEditProfile={handleEditProfile}
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
      <Portal isOpened={isOpenPopup}>
        {isLogin ? (
          <QuitConfirmationPopup
            isOpen={isOpenPopup}
            onClose={handleClosePopup}
            onExit={confirmExitProfile}
          />
        ) : (
          <QuitInfotooltipPopup
            isOpen={isOpenPopup}
            onClose={handleExitProfile}
            onApprov={handleExitProfile}
          />
        )}
      </Portal>
    </section>
  );
};

export default Profile;
