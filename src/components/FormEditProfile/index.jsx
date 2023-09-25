import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';

import InputText from '../../ui/forms/inputs/inputText/InputText';
import InputPhone from '../../ui/forms/inputs/inputPhone/InputPhone';
import ProfileAvatar from '../../ui/profileAvatar';
import Button from '../../ui/buttons/originButton/Button';
import ImageUploadPopup from '../ImageUploadPopup';

const FormEditProfile = ({ handleSubmitForm, userData, setUserData }) => {
  const isDataUser = Object.keys(userData).length !== 0;
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isValid, setIsValid] = useState(isDataUser);
  const [isValidInput, setIsValidInput] = useState(false);

  const isActive = Object.values(isValidInput).every((item) => item) && isValid;

  const handleOpenPopup = () => {
    setIsOpenPopup((state) => !state);
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
        <Button
          onClick={() => {}}
          size="medium"
          variant="outlined"
          type="submit"
          active={isActive}
        >
          Сохранить
        </Button>
      </form>
      <ImageUploadPopup
        getImage={setUserData}
        isOpen={isOpenPopup}
        onClose={handleOpenPopup}
        round
      />
    </>
  );
};

FormEditProfile.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  userData: PropTypes.objectOf(PropTypes.string).isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default FormEditProfile;
