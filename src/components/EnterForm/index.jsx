import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';

function EnterForm() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({});

  const handleFormChange = (value) => {
    setValues({
      ...values,
      ...value,
    });
    setIsValid(document.getElementById('enter-form').checkValidity());
    console.log(values, isValid)
  };

  return (
    <form className={classes.form} id='enter-form'>
      <h2 className={classes.form__title}>Войдите в аккаунт</h2>
      <fieldset className={classes.form__fieldset}>
        <InputText
          type='email'
          placeholder='Почта'
          name='email'
          maxLength={50}
          minLength={5}
          required
          getInput={handleFormChange}
          id='email-input'
          autoComplete='email'
        />
        <InputText
          type='password'
          placeholder='Пароль'
          name='password'
          maxLength={20}
          minLength={6}
          required
          getInput={handleFormChange}
          id='password-input'
          autoComplete='current-password'
        />
        <Link
          to="purrfectcare.ru"
          target="_blank"
          className={classes.form__link}
        >
          Забыли пароль?
        </Link>
      </fieldset>
      <div className={classes['form__button-wrapper']}>
        <Button
          onClick={() => {}}
          variant="purple-filled"
          size="medium"
          type="submit"
          isMaxWidth
          active={isValid}
        >
          Войти
        </Button>
        <div className={classes.form__navbox}>
          <h3 className={classes.form__navtext}>Нет аккаунта?</h3>
          <Button
            onClick={() => navigate('/signup')}
            variant="outlined"
            size="medium"
            type="button"
            isMaxWidth
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
      
    </form>
  )
};

export default EnterForm;