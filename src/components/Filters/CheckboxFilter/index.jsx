import PropTypes from 'prop-types';
import classes from './style.module.scss';
import Checkbox from '../../../ui/forms/checkboxes/checkbox/checkbox';

function CheckboxFilter({ legend, options, selectedFilters, onFilterChange }) {
    
  return (
    <fieldset className={classes.filter__fieldset}>
      <legend className={classes.filter__legend}>{legend}</legend>
      {options.map((item) => (
        <div key={item.value}>
          <Checkbox
            onChange={() => onFilterChange(item.value)}
            type="checkbox"
            checked={selectedFilters.includes(item.value)}
            value={item.value}
            name={`checkbox_${legend}_${item.value}`} // Пример генерации уникального имени
          >
            {item.label}
          </Checkbox>
        </div>
      ))}
    </fieldset>
  );
}

CheckboxFilter.propTypes = {
  legend: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
   onFilterChange: PropTypes.func,
};

CheckboxFilter.defaultProps = {
  selectedFilters: [],
  onFilterChange: () => {},
};

export default CheckboxFilter;
