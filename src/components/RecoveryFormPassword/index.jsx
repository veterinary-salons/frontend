import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/buttons/originButton/Button';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import MailAccount from '../MailAccount';
import classes from './style.module.scss';

function RecoveryFormPassword() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [isValidateInput, setIsValidateInput] = useState({});
  const [values, setValues] = useState({});
  const [isOnAccount, setIsOnAccount] = useState(false);
  const previosUser = JSON.parse(localStorage.getItem('previousAccount'));

  useEffect(() => {
    if (previosUser !== null) {
      setIsOnAccount(true)
    }
  }, []);

  const isActive =
    Object.values(isValidateInput).every((item) => item) && isValid;

  const handleFormChange = (value) => {
    setValues({
      ...values,
      ...value,
    });
  };

  const handleFormValidChange = (e) => {
    setIsValid(e.target.closest('form').checkValidity());
    if (
      e.target.closest('form')["password-repeat"].value !==
      e.target.closest('form').password.value
    ) {
      setIsValid(false)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/successful-recovery');
  };

  return (
    <form
      onChange={handleFormValidChange}
      className={classes.form}
      id="recovery-password-form"
    >
      <h2 className={classes.form__title}>Восстановление пароля</h2>
      {isOnAccount &&
        <MailAccount
          image={previosUser.src}
          title={previosUser.name}
          email={previosUser.email}
        />
      }
      <p className={classes.form__text}>
        Отлично, теперь придумайте новый пароль для завершения восстановления
      </p>
      <fieldset className={classes.form__fieldset}>
        <div className={classes['form__input-wrapper']}>
          <span className={classes.form__label}>
          Введите новый пароль
          </span>
          <InputText
            type="password"
            placeholder="Новый пароль"
            name="password"
            maxLength={20}
            minLength={8}
            required
            getInput={handleFormChange}
            id="password-input"
            getValid={setIsValidateInput}
          />
          <span className={classes.form__label}>
          Повторите, чтобы не ошибиться
          </span>
          <InputText
            type="password"
            placeholder="Новый пароль ещё раз"
            name="password-repeat"
            maxLength={20}
            minLength={8}
            required
            getInput={handleFormChange}
            id="password-repeat-input"
            getValid={setIsValidateInput}
          />
        </div>
      </fieldset>
      <div className={classes['form__button-wrapper']}>
      <Button
          onClick={() => navigate(-1)}
          variant="outlined"
          size="medium"
          type="button"
        >
          Назад
        </Button>
        <Button
          onClick={handleFormSubmit}
          variant="purple-filled"
          size="medium"
          type="submit"
          active={isActive}
        >
          Продолжить
        </Button>
      </div>
    </form>
  );
}

export default RecoveryFormPassword;
