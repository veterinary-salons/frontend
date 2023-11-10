import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import classes from './style.module.scss';

import ProfileUserData from '../../components/ProfileUserData';
import FormEditProfile from '../../components/FormEditProfile';

import Portal from '../../components/Portal';
import QuitConfirmationPopup from '../../components/QuitConfirmationPopup';
import QuitInfotooltipPopup from '../../components/QuitInfotooltipPopup';

import { setUser } from '../../app/store/userSlice';

const Profile = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(localStorage.getItem('auth'));
  const navigate = useNavigate();
  // для демонстрации работы изменения данных профиля
  const [userData, setUserData] = useState(user.data);

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
    dispatch(setUser(userData));
  };

  return (
    <section className={classes.profile}>
      {!isEditProfile ? (
        <ProfileUserData
          handleEditProfile={handleEditProfile}
          handleExitProfile={handleClickExitProfile}
          userData={user.data}
          profileType={user.profileType}
        />
      ) : (
        <FormEditProfile
          handleSubmitForm={handleSubmitForm}
          userData={userData}
          setUserData={setUserData}
          profileType={user.profileType}
        />
      )}
      <Outlet />
      {pathname === '/profile' ? (
        <button
          type="button"
          onClick={handleClickExitProfile}
          className={classes.profile__exit}
        >
          Выйти из профиля
        </button>
      ) : null}
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
