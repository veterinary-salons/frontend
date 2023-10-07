import { useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import InputPhone from '../../ui/forms/inputs/inputPhone/InputPhone';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';

function SignUpForm() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [values, setValues] = useState({});

  const handleFormChange = (value) => {
    if(value["registration-subject"]) {
      setUserRole(value["registration-subject"])
    }
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
    navigate('/successful-signup', {state: {userRole}});
    // if(userRole === "specialist") {
    //   navigate('/successful-signup');
    // } else if(userRole === "user") {
    //   navigate('/successful-signup');
    // }
  };

  return (
    <form
      onChange={handleFormValidChange}
      className={classes.form}
      id="registration-form"
    >
      <h2 className={classes.form__title}>Регистрация</h2>
      <fieldset
        className={classNames(
          classes.form__fieldset,
          classes.form__fieldset_type_checkbox,
        )}
      >
        <legend
          className={classNames(
            classes.form__legend,
            classes.form__legend_type_checkbox,
          )}
        >
          Вы хотите
        </legend>
        <Checkbox
          type="radio"
          checked={values["registration-subject"] === "user"}
          htmlType="radio"
          value="user"
          name="registration-subject"
          getCheckbox={handleFormChange}
          required
        >
          Пользоваться услугами
        </Checkbox>
        <Checkbox
          type="radio"
          checked={values["registration-subject"] === "specialist"}
          htmlType="radio"
          value="specialist"
          name="registration-subject"
          getCheckbox={handleFormChange}
          required
        >
          Предлагать услуги
        </Checkbox>
      </fieldset>
      <fieldset className={classes.form__fieldset}>
        <legend className={classes.form__legend}>Как вас зовут?</legend>
        <InputText
          type="text"
          placeholder="Имя"
          name="userName"
          maxLength={15}
          minLength={2}
          required
          getInput={handleFormChange}
          id="name-input"
        />
        <InputText
          type="text"
          placeholder="Фамилия"
          name="userSurname"
          maxLength={15}
          minLength={2}
          required
          getInput={handleFormChange}
          id="surname-input"
        />
      </fieldset>
      <fieldset className={classes.form__fieldset}>
        <legend className={classes.form__legend}>Введите номер телефона</legend>
        <InputPhone getInput={handleFormChange} />
      </fieldset>
      <fieldset className={classes.form__fieldset}>
        <legend className={classes.form__legend}>
          Введите почту и придумайте пароль
        </legend>
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
        />
        <InputText
          type="password"
          placeholder="Пароль"
          name="password"
          maxLength={20}
          minLength={6}
          required
          getInput={handleFormChange}
          id="password-input"
          autoComplete="current-password"
        />
      </fieldset>
      <Checkbox
        type="checkbox"
        checked={values["registration-agreement"] === "registration-agreement"}
        htmlType="checkbox"
        value="registration-agreement"
        name="registration-agreement"
        agreement
        required
        getCheckbox={handleFormChange}
      >
        <p className={classes.form__agreement}>
          Я&nbsp;даю свое согласие на&nbsp;обработку моей персональной
          информации в&nbsp;соответствии с&nbsp;
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
        </p>
      </Checkbox>
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
          onClick={handleFormSubmit}
          variant="purple-filled"
          size="medium"
          type="submit"
          active={isValid}
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
