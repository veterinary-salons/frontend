import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import classes from './style.module.scss';
import InputText from '../../ui/forms/inputs/inputText/InputText';
import Button from '../../ui/buttons/originButton/Button';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import Dropdown from '../../ui/forms/dropdowns/Dropdown';
import { arrayAnimals } from '../../assets/constants/constants';

import ImageUpload from '../ImageUpload';

const FormPetCard = ({ dataPet, setDataPet }) => {
  const isDataPet = Object.keys(dataPet).length !== 0;
  const [data, setData] = useState({ ...dataPet });
  const [isValid, setIsValid] = useState(isDataPet);
  const [isValidInput, setIsValidInput] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const isActive = Object.values(isValidInput).every((item) => item) && isValid;

  const getInputValue = (value) => {
    setData({
      ...data,
      ...value,
    });
  };

  const handleFormValidChange = (e) => {
    setIsValid(e.target.closest('form').checkValidity());
  };

  const handleSubmit = (e) => {
    e.prevenDefault();
    setDataPet((state) => ({ ...state, ...data }));
  };

  const handleOpenPopup = () => {
    setIsOpenPopup((state) => !state);
  };

  const handleDeleteAvatar = () => {
    setData({ ...data, src: '' });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onChange={handleFormValidChange}
        className={classes.form}
      >
        <h2 className={classes.form__title}>
          {isDataPet ? (
            <>
              {data.petName}
              <span className={classes['form__title-explanation']}>
                &nbsp;(редактирование карточки)
              </span>
            </>
          ) : (
            'Новый питомец'
          )}
        </h2>
        <fieldset
          className={classNames(
            classes.form__fieldset,
            classes.form__fieldset_image,
          )}
        >
          <div className={classes['form__wrapper-image']}>
            {data.src ? (
              <img
                src={data.src}
                alt="фото питомца"
                className={classes.form__image}
              />
            ) : null}
          </div>
          <div className={classes['form__wrapper-button']}>
            {data.src ? (
              <>
                <Button
                  onClick={handleOpenPopup}
                  size="medium"
                  variant="outlined"
                  isMaxWidth
                >
                  Сменить фото
                </Button>
                <Button
                  onClick={handleDeleteAvatar}
                  size="medium"
                  variant="outlined"
                  isMaxWidth
                >
                  Удалить фото
                </Button>
              </>
            ) : (
              <Button
                onClick={handleOpenPopup}
                size="medium"
                variant="outlined"
                isMaxWidth
              >
                Добавить фото
              </Button>
            )}
          </div>
        </fieldset>
        <div
          className={classNames(classes.form__lable, classes.form__lable_pb8)}
        >
          У меня
          <Dropdown
            array={arrayAnimals}
            value={dataPet['my-type']}
            width="100%"
            getValue={getInputValue}
            name="my-type"
          />
        </div>
        {data.type === 'другое' ? (
          <label className={classes.form__lable}>
            Укажите вид питомца
            <InputText
              getInput={getInputValue}
              maxLength={100}
              name="my-type"
              id="my-type"
              initialValue={data}
              placeholder=""
              getValid={setIsValidInput}
            />
          </label>
        ) : null}
        <label className={classes.form__lable}>
          Порода
          <InputText
            getInput={getInputValue}
            maxLength={40}
            name="breed"
            id="breed"
            initialValue={data}
            placeholder=""
            getValid={setIsValidInput}
          />
        </label>
        <label className={classes.form__lable}>
          Имя питомца
          <InputText
            className={classes.form__input}
            getInput={getInputValue}
            maxLength={100}
            name="petName"
            id="petName"
            initialValue={data}
            placeholder=""
            getValid={setIsValidInput}
          />
        </label>
        <label className={classes.form__lable}>
          Возраст
          <div className={classes['form__age-wrapper']}>
            <InputText
              className={classes.form__input}
              getInput={getInputValue}
              maxLength={3}
              minLength={1}
              name="years"
              id="years"
              initialValue={data}
              placeholder=""
              getValid={setIsValidInput}
              type="number"
            />
            <span className={classes.form__age}>лет</span>
            <InputText
              className={classes.form__input}
              getInput={getInputValue}
              maxLength={3}
              minLength={1}
              name="months"
              id="months"
              initialValue={data}
              placeholder=""
              getValid={setIsValidInput}
              type="number"
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
              checked={data.size === 'более 20 кг'}
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
        <Button
          type="submit"
          size="medium"
          variant="outlined"
          active={isActive}
        >
          Сохранить данные
        </Button>
      </form>
      <ImageUpload
        getImage={setData}
        isOpen={isOpenPopup}
        onClose={handleOpenPopup}
      />
    </>
  );
};

FormPetCard.propTypes = {
  dataPet: PropTypes.shape({
    petName: PropTypes.string,
    src: PropTypes.string,
    'my-type': PropTypes.string,
  }),
  setDataPet: PropTypes.func,
};

FormPetCard.defaultProps = {
  dataPet: {},
  setDataPet: () => {},
};

export default FormPetCard;
