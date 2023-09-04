import { Link } from 'react-router-dom';
import { useState } from 'react';
import CheckboxFilter from '../../CheckboxFilter';
import classes from './style.module.scss';
import Checkbox from '../../../../ui/forms/checkboxes/checkbox/checkbox';
import { animals } from '../../../../assets/constants/filters';

function GoodsFilterMain() {
  const [values, setValues] = useState({});

  const handleFormChange = (evt, value) => {
    setValues({
      ...values,
      ...value,
    });
    console.log(values, evt)
  };

  return (
    <form className={classes.filter} id='goods-filter'>
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>Животное</legend>
        {animals.map((item) => (
          <Link key={item.value} to="/" className={classes.filter__link}>
            {item.label}
          </Link>
        ))}
      </fieldset>
      <CheckboxFilter type="deliveryTime" getCheckbox={(evt) => handleFormChange(evt)}/>
      <CheckboxFilter type='age' />
      <CheckboxFilter type="TypeForAll" />
      <CheckboxFilter type="brands" isActiveShowAllButton/>
      <Checkbox
        // onChange={handleCheck}
        type="switch"
        checked={false}
        htmlType="checkbox"
        value="holistics"
        name="holistics"
        getCheckbox={handleFormChange}
      >
        Холистики
      </Checkbox>
      <CheckboxFilter type="needs" />
      <CheckboxFilter type="feedTypes" />
      <CheckboxFilter type="petSize" />
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>Цена</legend>
        {/* TODO: Inputs with price */}
        <Checkbox
          onChange={() => {}}
          type="checkbox"
          checked={false}
          htmlType="checkbox"
          value="sales"
          name="sales"
        >
          Только со скидками
        </Checkbox>
        <button
          className={[classes['filter__add-btn']]}
          type="button"
          onClick={() => {}}
        >
          Убрать все
        </button>
      </fieldset>
    </form>
  );
}

export default GoodsFilterMain;
