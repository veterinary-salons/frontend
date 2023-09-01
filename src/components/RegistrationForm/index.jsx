import { useNavigate, Link } from 'react-router-dom';
// import { useState } from 'react';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import InputPhone from '../../ui/forms/inputs/inputPhone/InputPhone';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';

function RegistrationForm() {
  // const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  return (
    <form className={classes.form}>
      <h2 className={classes.form__title}>Регистрация</h2>
      <div className={classes.form__section}>
        <h3 className={classes.form__label}>Вы хотите</h3>
        <Checkbox
          onChange={() => {}}
          type='radio'
          checked
          htmlType='radio'
          value='consumer-registration'
          name='registration-subject'
          gap='8px'
        >
          <span>Пользоваться услугами</span>
        </Checkbox>
        <Checkbox
          onChange={() => {}}
          type='radio'
          checked={false}
          htmlType='radio'
          value='provider-registration'
          name='registration-subject'
          gap='8px'
        >
          <span>Предлагать услуги</span>
        </Checkbox>
      </div>
      <div className={classes.form__section}>
        <h3 className={classes.form__label}>Как вас зовут?</h3>
        <div className={classes.form__inputs}>
          <InputText
            type='text'
            placeholder='Имя'
            name='userName'
            maxLength={15}
            minLength={2}
            required
            infoInput={() => {}}
            id='name-input'
          />
          <InputText
            type='text'
            placeholder='Фамилия'
            name='userSurname'
            maxLength={15}
            minLength={2}
            required
            infoInput={() => {}}
            id='surname-input'
          />
        </div>
      </div>
      <div className={classes.form__section}>
        <h3 className={classes.form__label}>Введите номер телефона</h3>
        <InputPhone
        />
      </div>
      <div className={classes.form__section}>
        <h3 className={classes.form__label}>Введите почту и придумайте пароль</h3>
        <div className={classes.form__inputs}>
          <InputText
            type='email'
            placeholder='Почта'
            name='email'
            maxLength={50}
            minLength={5}
            required
            infoInput={() => {}}
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
            infoInput={() => {}}
            id='password-input'
            autoComplete='current-password'
          />
        </div>
        <div>
          <Checkbox
            onChange={() => {}}
            type='checkbox'
            checked={false}
            htmlType='checkbox'
            value='registration-agreement'
            gap='8px'
            agreement
          >
            <span>
              Я&nbsp;даю свое согласие на&nbsp;обработку моей персональной информации в&nbsp;соответствии с&nbsp;
              <Link
                to="purrfectcare.ru"
                target="_blank"
                className={classes.form__link}
              >
                Политикой конфиденциальности
              </Link>
              &nbsp;и&nbsp;принимаю условия&nbsp;
              <Link
                to="purrfectcare.ru"
                target="_blank"
                className={classes.form__link}
              >
                Пользовательского соглашения
              </Link>
            </span>
          </Checkbox>
        </div>
      </div>
      <div className={classes.form__buttons}>
        <Button
          onClick={() => navigate('/')}
          variant="outlined"
          size="medium"
          type="button"
        >
          На главную
        </Button>
        <Button
          onClick={() => {}}
          variant="purple-filled"
          size="medium"
          type="submit"
          // active={isValid}
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
};

export default RegistrationForm;
