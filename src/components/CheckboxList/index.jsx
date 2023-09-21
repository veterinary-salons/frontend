import PropTypes from 'prop-types';
import classes from './style.module.scss';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import {
  groomerServiceData,
  dogHandlerServiceData,
  vetServiceData,
  petSitterServiceData,
} from '../../assets/constants/servicesData';

// Получить доступные значения для type из объекта groomerServiceData, dogHandlerServiceData, vetServiceData, petSitterServiceData
const availableTypes = [
  ...Object.keys(groomerServiceData),
  ...Object.keys(dogHandlerServiceData),
  ...Object.keys(vetServiceData),
  ...Object.keys(petSitterServiceData),
];
console.log(availableTypes);

function CheckboxList({
  type,
  getCheckbox,
  values,
}) {
  const { legend, checkboxType, options } =
    groomerServiceData[type] ||
    dogHandlerServiceData[type] ||
    vetServiceData[type] ||
    petSitterServiceData[type] ||
    {};

    console.log(options);
  return (
    <fieldset className={classes.checkbox__fieldset}>
      <legend className={classes.checkbox__legend}>{legend}</legend> 
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
    </fieldset>
  );
}

CheckboxList.propTypes = {
  type: PropTypes.oneOf(availableTypes).isRequired, // Пропс для выбора типа типа
  getCheckbox: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string),
};

CheckboxList.defaultProps = {
  values: {},
};

export default CheckboxList;
