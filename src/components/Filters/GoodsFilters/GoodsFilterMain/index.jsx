import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import CheckboxFilter from '../../CheckboxFilter';
import classes from './style.module.scss';
import Checkbox from '../../../../ui/forms/checkboxes/checkbox/checkbox';
import { animals } from '../../../../assets/constants/filters';
import InputPrice from '../../../../ui/forms/inputs/inputPrice';

function GoodsFilterMain() {
  const [values, setValues] = useState({});

  const handleFormChange = useCallback(
    (value) => {
      setValues({
        ...values,
        ...value,
      });
    },
    [setValues, values],
  );

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
      <CheckboxFilter
        type="deliveryTime"
        getCheckbox={handleFormChange}
        values={values}
      />
      <CheckboxFilter
        type='age'
        getCheckbox={handleFormChange}
        values={values}
      />
      <CheckboxFilter
        type="TypeForAll"
        getCheckbox={handleFormChange}
        values={values}
      />
      <CheckboxFilter
        type="brands"
        getCheckbox={handleFormChange}
        values={values}
        isActiveShowAllButton
      />
      <Checkbox
        type="switch"
        checked={false}
        htmlType="checkbox"
        value="holistics"
        name="holistics"
        getCheckbox={handleFormChange}
      >
        Холистики
      </Checkbox>
      <CheckboxFilter
        type="needs"
        getCheckbox={handleFormChange}
        values={values}
      />
      <CheckboxFilter
        type="feedTypes"
        getCheckbox={handleFormChange}
        values={values}
      />
      <CheckboxFilter
        type="petSize"
        getCheckbox={handleFormChange}
        values={values}
      />
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>Цена</legend>
        <div className={classes.filter__inputs}>
          <InputPrice/>
          <InputPrice prefix='до'/>
        </div>
        <Checkbox
          type="checkbox"
          checked={false}
          htmlType="checkbox"
          value="sales"
          name="sales"
          getCheckbox={handleFormChange}
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
