import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';

function RecoveryFormEmail() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [isValidateInput, setIsValidateInput] = useState({});
  const [values, setValues] = useState({});

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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/recovery-code');
  };

  return (
    <form
      onChange={handleFormValidChange}
      className={classes.form}
      id="recovery-email-form"
    >
      <h2 className={classes.form__title}>Восстановление пароля</h2>
      <fieldset className={classes.form__fieldset}>
        <p className={classes.form__text}>
          Введите адрес электронной почты, на который вам придёт код восстановления
        </p>
        <InputText
          type="email"
          placeholder="Почта"
          name="email"
          maxLength={50}
          minLength={5}
          required
          getInput={handleFormChange}
          id="email-input"
          autoComplete="email"
          getValid={setIsValidateInput}
        />
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

export default RecoveryFormEmail;
