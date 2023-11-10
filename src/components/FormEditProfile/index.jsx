import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';

import InputText from '../../ui/forms/inputs/inputText/InputText';
import InputPhone from '../../ui/forms/inputs/inputPhone/InputPhone';
import ProfileAvatar from '../../ui/profileAvatar';
import Button from '../../ui/buttons/originButton/Button';
import ImageUploadPopup from '../ImageUploadPopup';
import CheckboxWithIcon from '../../ui/forms/checkboxes/checkboxWithIcon';

import iconHome from '../../assets/images/icon/home-outline/home.svg';
import iconCar from '../../assets/images/icon/car-outline/car-outline.svg';

const FormEditProfile = ({
  handleSubmitForm,
  userData,
  setUserData,
  profileType,
}) => {
  const isDataUser = Object.keys(userData).length !== 0;
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isValid, setIsValid] = useState(isDataUser);
  const [isValidInput, setIsValidInput] = useState(false);

  const isActive = Object.values(isValidInput).every((item) => item) && isValid;

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
    console.log('open');
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  const handleDeleteAvatar = () => {
    setUserData((state) => ({ ...state, src: '' }));
  };

  const getInputValue = (value) => {
    setUserData({
      ...userData,
      ...value,
    });
  };

  const handleFormValidChange = (e) => {
    setIsValid(e.target.closest('form').checkValidity());
  };

  const isCustomer = profileType === 'customer';
  console.log('avatar');

  return (
    <>
      <form
        noValidate
        className={classes.form}
        onSubmit={handleSubmitForm}
        onChange={handleFormValidChange}
      >
        <fieldset
          className={classNames(
            classes.form__fieldset,
            classes.form__fieldset_avatar,
          )}
        >
          <ProfileAvatar bigSize src={userData.src} alt="avatar" />
          <div className={classes['form__wrapper-button']}>
            <Button
              onClick={handleOpenPopup}
              size="medium"
              variant="outlined"
              isMaxWidth
            >
              Сменить
            </Button>
            <Button
              onClick={handleDeleteAvatar}
              size="medium"
              variant="outlined"
              isMaxWidth
            >
              Удалить
            </Button>
          </div>
          <div className={classes['form__wrapper-button_mobile']}>
            <button
              type="button"
              className={classes['form__avatar-button']}
              onClick={handleOpenPopup}
            >
              Сменить
            </button>
            <button
              type="button"
              className={classes['form__avatar-button']}
              onClick={handleDeleteAvatar}
            >
              Удалить
            </button>
          </div>
        </fieldset>
        <fieldset className={classes.form__fieldset}>
          <legend className={classes.form__legend}>Имя и фамилия</legend>
          <InputText
            getInput={getInputValue}
            minLength={2}
            maxLength={30}
            name="name"
            placeholder="Имя"
            id="name"
            initialValue={userData}
            getValid={setIsValidInput}
          />
          <InputText
            getInput={getInputValue}
            maxLength={30}
            name="surname"
            placeholder="Фамилия"
            id="surname"
            initialValue={userData}
            getValid={setIsValidInput}
          />
        </fieldset>
        <fieldset className={classes.form__fieldset}>
          <legend className={classes.form__legend}>Номер телефона</legend>
          <InputPhone
            getInput={getInputValue}
            initialValue={userData}
            getValid={setIsValidInput}
          />
        </fieldset>
        <fieldset className={classes.form__fieldset}>
          <legend className={classes.form__legend}>Адрес</legend>
          <InputText
            getInput={getInputValue}
            maxLength={200}
            name="address"
            placeholder="Адрес"
            id="address"
            initialValue={userData}
            getValid={setIsValidInput}
          />
        </fieldset>
        <fieldset className={classes.form__fieldset}>
          <legend className={classes.form__legend}>Почта</legend>
          <InputText
            getInput={getInputValue}
            id="text"
            maxLength={30}
            name="email"
            placeholder="Email"
            type="email"
            initialValue={userData}
            getValid={setIsValidInput}
          />
          <InputText
            getInput={getInputValue}
            id="password"
            maxLength={20}
            name="password"
            placeholder="Password"
            type="password"
            initialValue={userData}
            getValid={setIsValidInput}
          />
        </fieldset>
        {!isCustomer ? (
          <fieldset className={classes.form__fieldset}>
            <legend className={classes.form__legend}>Выезд к клиентам</legend>
            <CheckboxWithIcon
              getCheckbox={setUserData}
              checked={userData.exit.some((item) => item.clientPlace)}
              label="Выезжаю к клиентам"
              value="Выезжаю к клиентам"
              name="clientPlace"
              parentName="exit"
            >
              <img className={classes.form__image} src={iconCar} alt="car" />
            </CheckboxWithIcon>
            <CheckboxWithIcon
              getCheckbox={setUserData}
              checked={userData.exit.some((item) => item.specialistPlace)}
              label="Принимаю клиентов у себя"
              value="Принимаю клиентов у себя"
              name="specialistPlace"
              parentName="exit"
            >
              <img className={classes.form__image} src={iconHome} alt="home" />
            </CheckboxWithIcon>
          </fieldset>
        ) : null}
        <div className={classes['form__button-save']}>
          <Button
            onClick={() => {}}
            size="medium"
            variant="outlined"
            type="submit"
            active={isActive}
            isMaxWidth
          >
            Сохранить
          </Button>
        </div>

        <button className={classes.form__delete}>Удалить профиль</button>
      </form>
      <ImageUploadPopup
        getImage={setUserData}
        isOpen={isOpenPopup}
        onClose={handleClosePopup}
        round
      />
    </>
  );
};

FormEditProfile.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  // userData: PropTypes.objectOf(PropTypes.string).isRequired,
  setUserData: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    tel: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    src: PropTypes.string,
    exit: PropTypes.arrayOf(
      PropTypes.shape({
        clientPlace: PropTypes.bool,
        text: PropTypes.string,
        specialistPlace: PropTypes.bool,
      }),
    ),
  }).isRequired,
  profileType: PropTypes.string.isRequired,
};

export default FormEditProfile;
