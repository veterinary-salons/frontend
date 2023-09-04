import PropTypes from 'prop-types';
import { useState } from 'react';
import classes from './style.module.scss';
import Checkbox from '../../../ui/forms/checkboxes/checkbox/checkbox';
import { filterData } from '../../../assets/constants/filters';

// Получить доступные значения для type из объекта filterData
const availableTypes = [...Object.keys(filterData)];

function CheckboxFilter({ selectedFilters, onFilterChange, type, isActiveShowAllButton }) {
  const { legend, options } = filterData[type] || {};
  const [selectedOptions, setSelectedOptions] = useState(selectedFilters);

  // TODO: отработать выделение чекбокса и событие "показать все"
  const handleOptionChange = (value) => {
    // let updatedOptions;

    // if (value === 'show-all') {
    //   updatedOptions = options.map((item) => item.value);
    // } else {
    //   updatedOptions = selectedOptions.includes(value)
    //     ? selectedOptions.filter((option) => option !== value)
    //     : [...selectedOptions, value];
    // }

    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value];

    setSelectedOptions(updatedOptions);
    onFilterChange(updatedOptions);
  };

  return (
    <fieldset className={classes.filter__fieldset}>
      <legend className={classes.filter__legend}>{legend}</legend>
      {options.map((item) => (
        <div key={item.value}>
          <Checkbox
            onChange={() => handleOptionChange(item.value)}
            type="checkbox"
            checked={selectedOptions.includes(item.value)}
            value={item.value}
            name={`checkbox_${type}_${item.value}`}
          >
            {item.label}
          </Checkbox>
        </div>
      ))}
      {isActiveShowAllButton && <div key="show-all">
        <button
          className={[classes['filter__add-btn']]}
          type="button"
          onClick={() => {}}
        >
          Посмотреть все
        </button>
      </div>
      }
    </fieldset>
  );
}

CheckboxFilter.propTypes = {
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  onFilterChange: PropTypes.func,
  isActiveShowAllButton: PropTypes.bool,
  type: PropTypes.oneOf(availableTypes).isRequired, // Пропс для выбора типа типа
};

CheckboxFilter.defaultProps = {
  selectedFilters: [],
  isActiveShowAllButton: false,
  onFilterChange: () => {},
};

export default CheckboxFilter;
