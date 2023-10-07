import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';
import MailAccount from '../MailAccount';

function RecoveryFormCode() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [isValidateInput, setIsValidateInput] = useState({});
  const [values, setValues] = useState({});
  const [isOnAccount, setIsOnAccount] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('onAccount') !== true) {
      setIsOnAccount(true)
    } else {
      setIsOnAccount(false)
    }
  }, []);

  // TODO: Доработать функциональность валидации кода (добавить isActive в кнопку сабмита)
  const isActive =
    Object.values(isValidateInput).every((item) => item) && isValid;
  console.log(isActive);

  const handleFormChange = (value) => {
    setValues({
      ...values,
      ...value,
    });
  };

  const handleFormValidChange = (e) => {
    setIsValid(e.target.closest('form').checkValidity());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('auth', true);
    navigate('/recovery-password');
  };

  return (
    <form
      onChange={handleFormValidChange}
      className={classes.form}
      id="recovery-code-form"
    >
      <h2 className={classes.form__title}>Восстановление пароля</h2>
      {isOnAccount && <MailAccount />}
      <fieldset className={classes.form__fieldset}>
        <p className={classes.form__text}>
        Мы отправили на указанную вами почту письмо с кодом для восстановления пароля. Введите код из письма
        </p>
        <div className={classes['form__input-wrapper']}>
          <span className={classes.form__label}>
            Код из письма
          </span>
          <InputText
            type="email"
            placeholder=""
            name="email"
            maxLength={50}
            minLength={5}
            required
            getInput={handleFormChange}
            id="email-input"
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
          active="true"
        >
          Продолжить
        </Button>
      </div>
    </form>
  );
}

export default RecoveryFormCode;
