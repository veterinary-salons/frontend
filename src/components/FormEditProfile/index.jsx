import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import classes from './style.module.scss';
import img from '../../assets/images/icon/avatar/img-avatar.svg';

import InputText from '../../ui/forms/inputs/inputText/InputText';
import InputPhone from '../../ui/forms/inputs/inputPhone/InputPhone';
import ProfileAvatar from '../../ui/profileAvatar';
import Button from '../../ui/buttons/originButton/Button';

const FormEditProfile = ({ handleSubmitForm }) => {
  const [values, setValues] = useState({});

  const getInputValue = (value) => {
    setValues({
      ...values,
      value,
    });
  };

  console.log(values);

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
          maxLength={30}
          name="name"
          placeholder="Имя"
          id="name"
        />
        <InputText
          maxLength={30}
          name="surname"
          placeholder="Фамилия"
          id="surname"
        />
      </fieldset>
      <fieldset className={classes.form__fieldset}>
        <legend className={classes.form__legend}>Номер телефона</legend>
        <InputPhone infoInput={() => {}} />
      </fieldset>
      <fieldset className={classes.form__fieldset}>
        <legend className={classes.form__legend}>Адрес</legend>
        <InputText
          maxLength={200}
          name="address"
          placeholder="Адрес"
          id="address"
        />
      </fieldset>
      <fieldset className={classes.form__fieldset}>
        <legend className={classes.form__legend}>Почта</legend>
        <InputText
          id="text"
          maxLength={30}
          name="email"
          placeholder="Email"
          type="email"
        />
        <InputText
          id="password"
          infoInput={() => {}}
          maxLength={20}
          name="password"
          placeholder="Password"
          type="password"
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
};

export default FormEditProfile;
