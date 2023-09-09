import PropTypes from 'prop-types';
import classes from './style.module.scss';
import Checkbox from '../../../ui/forms/checkboxes/checkbox/checkbox';
import { filterGoodsData, filterServicesData } from '../../../assets/constants/filters';

// Получить доступные значения для type из объекта filterGoodsData
const availableTypes = [...Object.keys(filterGoodsData), ...Object.keys(filterServicesData)];

function CheckboxFilter({
  // selectedFilters,
  // onFilterChange,
  type,
  isActiveShowAllButton,
  getCheckbox,
  values,
}) {
  const { legend, checkboxType, options } = filterGoodsData[type] || filterServicesData[type] || {};
  // const [selectedOptions, setSelectedOptions] = useState(selectedFilters);

  // TODO: отработать выделение чекбокса и событие "показать все"
  // const handleOptionChange = (value) => {
  //   // let updatedOptions;

  //   // if (value === 'show-all') {
  //   //   updatedOptions = options.map((item) => item.value);
  //   // } else {
  //   //   updatedOptions = selectedOptions.includes(value)
  //   //     ? selectedOptions.filter((option) => option !== value)
  //   //     : [...selectedOptions, value];
  //   // }

  //   const updatedOptions = selectedOptions.includes(value)
  //     ? selectedOptions.filter((option) => option !== value)
  //     : [...selectedOptions, value];

  //   setSelectedOptions(updatedOptions);
  //   onFilterChange(updatedOptions);
  //   console.log(selectedOptions)
  // };

  return (
    <fieldset className={classes.filter__fieldset}>
      <legend className={classes.filter__legend}>{legend}</legend>
      {options.map((item) => (
        <Checkbox
          key={item.value}
          type={checkboxType}
          htmlType={checkboxType}
          checked={
            item.name
              ? values[item.name] === item.value
              : values[item.value] === item.value
          }
          value={item.value}
          name={item.name ? item.name : item.value}
          getCheckbox={getCheckbox}
        >
          {item.label}
        </Checkbox>
      ))}
      {isActiveShowAllButton && (
        <div key="show-all">
          <button
            className={[classes['filter__add-btn']]}
            type="button"
            onClick={() => {}}
          >
            Посмотреть все
          </button>
        </div>
      )}
    </fieldset>
  );
}

CheckboxFilter.propTypes = {
  // selectedFilters: PropTypes.arrayOf(PropTypes.string),
  // onFilterChange: PropTypes.func,
  isActiveShowAllButton: PropTypes.bool,
  type: PropTypes.oneOf(availableTypes).isRequired, // Пропс для выбора типа типа
  getCheckbox: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string),
};

CheckboxFilter.defaultProps = {
  // selectedFilters: [],
  isActiveShowAllButton: false,
  values: {},
  // onFilterChange: () => {},
};

export default CheckboxFilter;
