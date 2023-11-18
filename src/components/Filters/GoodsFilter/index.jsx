import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import CheckboxFilter from '../CheckboxFilter';
import classes from './style.module.scss';
import Checkbox from '../../../ui/forms/checkboxes/checkbox/checkbox';
import { animals } from '../../../assets/constants/filters';
import InputPrice from '../../../ui/forms/inputs/inputPrice';

function GoodsFilter({ category }) {
  const [values, setValues] = useState({
    category,
  });
  const navigation = useNavigate();

  const handleFormChange = useCallback(
    (value) => {
      setValues({
        ...values,
        ...value,
      });
    },
    [setValues, values],
  );

  useEffect(() => {
    if (values.category) {
      navigation(`/goods/${values.category}`);
    }
  }, [values.category]);

  return (
    <form className={classes.filter} id="goods-filter">
      <CheckboxFilter
        type="сategories"
        getCheckbox={handleFormChange}
        values={values}
      />
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>Животное</legend>
        {animals.map((item) => (
          <Link
            key={item.value}
            to={item.value}
            className={classes.filter__link}
          >
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
        type={`Type-${category}`}
        getCheckbox={handleFormChange}
        values={values}
        isActiveShowAllButton={
          category === 'vetpharmacy' || category === 'hygiene'
        }
      />
      {category !== 'bowls-beds-houses' && (
        <CheckboxFilter
          type="brands"
          getCheckbox={handleFormChange}
          values={values}
          isActiveShowAllButton
        />
      )}
      {category === 'feed-goodies' && (
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
      )}
      {(category === 'toilet' ||
        category === 'hygiene' ||
        category === 'vetpharmacy') && (
        <CheckboxFilter
          type="age"
          getCheckbox={handleFormChange}
          values={values}
        />
      )}
      {category === 'feed-goodies' && (
        <CheckboxFilter
          type="needs"
          getCheckbox={handleFormChange}
          values={values}
        />
      )}
      <CheckboxFilter
        type="petSize"
        getCheckbox={handleFormChange}
        values={values}
      />
      <fieldset className={classes.filter__fieldset}>
        <legend className={classes.filter__legend}>Цена</legend>
        <div className={classes.filter__inputs}>
          <InputPrice />
          <InputPrice prefix="до" />
        </div>
        <Checkbox
          type="checkbox"
          checked={values.sales === "sales"}
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

GoodsFilter.propTypes = {
  category: PropTypes.oneOf([
    'feed-goodies',
    'toys-ammunition',
    'toilet',
    'hygiene',
    'bowls-beds-houses',
    'vetpharmacy',
  ]),
};

GoodsFilter.defaultProps = {
  category: 'feed-goodies',
};

export default GoodsFilter;
