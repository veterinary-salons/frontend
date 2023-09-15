import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import classes from './style.module.scss';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import Button from '../../ui/buttons/originButton/Button';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';

const FormEditProfile = ({ dataPet }) => {
  const isDataPet = Object.keys(dataPet).length !== 0;
  const { title, src } = dataPet;
  const [data, setData] = useState({
    // breed: '',
    // name: '',
    // years: '',
    // months: '',
    // size: '',
    // unsex: '',
    // vaccinated: '',
  });

  useEffect(() => {
    if (isDataPet) {
      setData(dataPet);
    }
  }, []);

  const getInputValue = (value) => {
    setData({
      ...data,
      ...value,
    });
  };

  console.log(isDataPet, data);
  return (
    <form className={classes.form}>
      <h2>
        {isDataPet ? `${title} (редактирование карточки)` : 'Новый питомец'}
      </h2>
      <fieldset
        className={classNames(
          classes.form__fieldset,
          classes.form__fieldset_image,
        )}
      >
        <div className={classes['form__wrapper-image']}>
          {src ? (
            <img src={src} alt="фото питомца" className={classes.form__image} />
          ) : null}
        </div>
        <div className={classes['form__wrapper-button']}>
          {src ? (
            <>
              <Button
                onClick={() => {}}
                size="medium"
                variant="outlined"
                isMaxWidth
              >
                Сменить фото
              </Button>
              <Button
                onClick={() => {}}
                size="medium"
                variant="outlined"
                isMaxWidth
              >
                Удалить фото
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {}}
              size="medium"
              variant="outlined"
              isMaxWidth
            >
              Добавить фото
            </Button>
          )}
        </div>
      </fieldset>
      <label className={classes.form__lable}>
        У меня
        <Dropdown width="100%" getValue={getInputValue} name="kind" />
      </label>
      <label className={classes.form__lable}>
        Порода
        <InputText
          getInput={getInputValue}
          maxLength={100}
          name="breed"
          id="breed"
          initialValue={data}
          placeholder=""
        />
      </label>
      <label className={classes.form__lable}>
        Имя питомца
        <InputText
          className={classes.form__input}
          getInput={getInputValue}
          maxLength={100}
          name="name"
          id="name"
          initialValue={data}
          placeholder=""
        />
      </label>
      <label className={classes.form__lable}>
        Возраст
        <div className={classes['form__age-wrapper']}>
          <InputText
            className={classes.form__input}
            getInput={getInputValue}
            maxLength={100}
            name="years"
            id="years"
            initialValue={data}
            placeholder=""
          />
          <span className={classes.form__age}>лет</span>
          <InputText
            className={classes.form__input}
            getInput={getInputValue}
            maxLength={100}
            name="months"
            id="months"
            initialValue={data}
            placeholder=""
          />
          <span className={classes.form__age}>мес</span>
        </div>
      </label>
      <label className={classes.form__lable}>
        Размер
        <div className={classes['form__radio-wrapper']}>
          <Checkbox
            htmlType="radio"
            getCheckbox={getInputValue}
            type="radio"
            name="size"
            value="До 5 кг"
            checked={data.size === 'До 5 кг'}
          >
            До 5 кг
          </Checkbox>
          <Checkbox
            htmlType="radio"
            getCheckbox={getInputValue}
            type="radio"
            name="size"
            value="5 - 10 кг"
            checked={data.size === '5 - 10 кг'}
          >
            5 - 10 кг
          </Checkbox>
          <Checkbox
            htmlType="radio"
            getCheckbox={getInputValue}
            type="radio"
            name="size"
            value="10 - 20 кг"
            checked={data.size === '10 - 20 кг'}
          >
            10 - 20 кг
          </Checkbox>
          <Checkbox
            htmlType="radio"
            getCheckbox={getInputValue}
            type="radio"
            name="size"
            value="более 20 кг"
            checked={data.size === 'более 20 к'}
          >
            более 20 кг
          </Checkbox>
        </div>
      </label>
      <label className={classes.form__lable}>
        Ваш питомец стерилизован/кастрирован?
        <div className={classes['form__radio-wrapper']}>
          <Checkbox
            htmlType="radio"
            getCheckbox={getInputValue}
            type="radio"
            name="unsex"
            value="Да"
            checked={data.unsex === 'Да'}
          >
            Да
          </Checkbox>
          <Checkbox
            htmlType="radio"
            getCheckbox={getInputValue}
            type="radio"
            name="unsex"
            value="Нет"
            checked={data.unsex === 'Нет'}
          >
            Нет
          </Checkbox>
          <Checkbox
            htmlType="radio"
            getCheckbox={getInputValue}
            type="radio"
            name="unsex"
            value="Не знаю"
            checked={data.unsex === 'Не знаю'}
          >
            Не знаю
          </Checkbox>
        </div>
      </label>
      <label className={classes.form__lable}>
        Ваш питомец имеет все необходимые вакцинации?
        <div className={classes['form__radio-wrapper']}>
          <Checkbox
            htmlType="radio"
            getCheckbox={getInputValue}
            type="radio"
            name="vaccinated"
            value="Да"
            checked={data.vaccinated === 'Да'}
          >
            Да
          </Checkbox>
          <Checkbox
            htmlType="radio"
            getCheckbox={getInputValue}
            type="radio"
            name="vaccinated"
            value="Нет"
            checked={data.vaccinated === 'Нет'}
          >
            Нет
          </Checkbox>
          <Checkbox
            required
            htmlType="radio"
            getCheckbox={getInputValue}
            type="radio"
            name="vaccinated"
            value="Не знаю"
            checked={data.vaccinated === 'Не знаю'}
          >
            Не знаю
          </Checkbox>
        </div>
      </label>
      <Button onClick={() => {}} size="medium" variant="outlined">
        Сохранить данные
      </Button>
    </form>
  );
};

FormEditProfile.propTypes = {
  dataPet: PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string,
  }),
};

FormEditProfile.defaultProps = {
  dataPet: {},
};

export default FormEditProfile;
