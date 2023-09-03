import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';
import img from '../../assets/images/icon/avatar/img-avatar.svg';

import InputText from '../../ui/forms/inputs/inputText/InputText';
import InputPhone from '../../ui/forms/inputs/inputPhone/InputPhone';
import ProfileAvatar from '../../ui/profileAvatar';
import Button from '../../ui/buttons/originButton/Button';

const FormEditProfile = ({ handleSubmitForm, userData, setUserData }) => {
  const getInputValue = (value) => {
    setUserData({
      ...userData,
      ...value,
    });
  };

  return (
    <form noValidate className={classes.form} onSubmit={handleSubmitForm}>
      <fieldset
        className={classNames(
          classes.form__fieldset,
          classes.form__fieldset_avatar,
        )}
      >
        <ProfileAvatar bigSize src={img} alt="avatar" />
        <div className={classes['form__wrapper-button']}>
          <Button
            onClick={() => {}}
            size="medium"
            variant="outlined"
            isMaxWidth
          >
            Сменить
          </Button>
          <Button
            onClick={() => {}}
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
          infoInput={getInputValue}
          minLength={2}
          maxLength={30}
          name="name"
          placeholder="Имя"
          id="name"
          initialValue={userData}
        />
        <InputText
          infoInput={getInputValue}
          maxLength={30}
          name="surname"
          placeholder="Фамилия"
          id="surname"
          initialValue={userData}
        />
      </fieldset>
      <fieldset className={classes.form__fieldset}>
        <legend className={classes.form__legend}>Номер телефона</legend>
        <InputPhone infoInput={getInputValue} initialValue={userData} />
      </fieldset>
      <fieldset className={classes.form__fieldset}>
        <legend className={classes.form__legend}>Адрес</legend>
        <InputText
          infoInput={getInputValue}
          maxLength={200}
          name="address"
          placeholder="Адрес"
          id="address"
          initialValue={userData}
        />
      </fieldset>
      <fieldset className={classes.form__fieldset}>
        <legend className={classes.form__legend}>Почта</legend>
        <InputText
          infoInput={getInputValue}
          id="text"
          maxLength={30}
          name="email"
          placeholder="Email"
          type="email"
          initialValue={userData}
        />
        <InputText
          infoInput={getInputValue}
          id="password"
          maxLength={20}
          name="password"
          placeholder="Password"
          type="password"
          initialValue={userData}
        />
      </fieldset>
      <Button onClick={() => {}} size="medium" variant="outlined" type="submit">
        Сохранить
      </Button>
    </form>
  );
};

FormEditProfile.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  userData: PropTypes.objectOf(PropTypes.string).isRequired,
  setUserData: PropTypes.func.isRequired,
};

export default FormEditProfile;
