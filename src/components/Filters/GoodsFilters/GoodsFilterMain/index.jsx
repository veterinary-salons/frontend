import { Link } from 'react-router-dom';
import { useState } from 'react';
import Checkbox from '../../../../ui/forms/checkboxes/checkbox/checkbox';
import {
  animals,
  deliveryTime,
  age,
  types,
  brands,
  needs,
  feedTypes,
  petSize
} from '../../../../assets/constants/filters';
import classes from './style.module.scss';

function GoodsFilterMain() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(state => !state)
  }

  return (
    <form className={classes.filter}>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>
          Животное
        </legend>
        {animals.map((item) =>
          <Link
            key={item.value}
            to='/'
            className={classes.filter__link}
          >
            {item.label}
          </Link>
        )}
      </fieldset>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>
          Сроки доставки
        </legend>
        {deliveryTime.map((item) =>
          <Checkbox
            key={item.value}
            onChange={handleCheck}
            type='radio'
            checked={isChecked}
            htmlType='radio'
            value={item.value}
            name='delivery-time'
          >
            {item.label}
          </Checkbox>
        )}
      </fieldset>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>
          Возрастной диапазон
        </legend>
        {age.map((item) =>
          <Checkbox
            key={item.value}
            onChange={() => {}}
            type='checkbox'
            checked={false}
            htmlType='checkbox'
            value={item.value}
            name='age'
          >
            {item.label}
          </Checkbox>
        )}
      </fieldset>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>
          Тип
        </legend>
        {types.map((item) =>
          <Checkbox
            key={item.value}
            onChange={() => {}}
            type='checkbox'
            checked={false}
            htmlType='checkbox'
            value={item.value}
            name='types'
          >
            {item.label}
          </Checkbox>
        )}
      </fieldset>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>
          Бренды
        </legend>
        {brands.map((item) =>
          <Checkbox
            key={item.value}
            onChange={() => {}}
            type='checkbox'
            checked={false}
            htmlType='checkbox'
            value={item.value}
            name='brands'
          >
            {item.label}
          </Checkbox>
        )}
        <button
          className={[classes['filter__add-btn']]}
          type='button'
          onClick={() => {}}
        >
          Посмотреть все
        </button>
      </fieldset>
      <Checkbox
        onChange={handleCheck}
        type='switch'
        checked={isChecked}
        htmlType='checkbox'
        value='holistics'
        name='holistics'
      >
        Холистики
      </Checkbox>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>
          Потребности
        </legend>
        {needs.map((item) =>
          <Checkbox
            key={item.value}
            onChange={() => {}}
            type='checkbox'
            checked={false}
            htmlType='checkbox'
            value={item.value}
            name='needs'
          >
            {item.label}
          </Checkbox>
        )}
      </fieldset>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>
          Тип корма
        </legend>
        {feedTypes.map((item) =>
          <Checkbox
            key={item.value}
            onChange={() => {}}
            type='checkbox'
            checked={false}
            htmlType='checkbox'
            value={item.value}
            name='feedTypes'
          >
            {item.label}
          </Checkbox>
        )}
      </fieldset>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>
          Размер питомца
        </legend>
        {petSize.map((item) =>
          <Checkbox
            key={item.value}
            onChange={() => {}}
            type='checkbox'
            checked={false}
            htmlType='checkbox'
            value={item.value}
            name='petSize'
          >
            {item.label}
          </Checkbox>
        )}
      </fieldset>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>
          Цена
        </legend>
        {/* TODO: Inputs with price */}
        <Checkbox
          onChange={() => {}}
          type='checkbox'
          checked={false}
          htmlType='checkbox'
          value='sales'
          name='sales'
        >
          Только со скидками
        </Checkbox>
        <button
          className={[classes['filter__add-btn']]}
          type='button'
          onClick={() => {}}
        >
          Убрать все
        </button>
      </fieldset>
    </form>
  )
};

export default GoodsFilterMain;
