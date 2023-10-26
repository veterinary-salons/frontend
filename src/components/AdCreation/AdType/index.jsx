import { useState } from 'react';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import Checkbox from '../../../ui/forms/checkboxes/checkbox/checkbox';
import { dateServiceCheckboxList } from '../../../assets/constants/constants';

const AdType = () => {
  const [values, setValues] = useState({});
  localStorage.setItem('veterinarian', JSON.stringify(values));

  return (
    <AdForm
      title="Какую услугу вы хотите оказать?"
      step={values.category}
      activBtn={values.category !== undefined}
    >
      <div className={classes['af__checkbox-container']}>
        {dateServiceCheckboxList.arrGroomRadio.options.map((i) => (
          <Checkbox
            key={i.value}
            type="radio"
            htmlType="radio"
            value={i.value}
            name={i.name}
            getCheckbox={setValues}
            checked={
              i.name ? values[i.name] === i.value : values[i.value] === i.value
            }
          >
            {i.label}
          </Checkbox>
        ))}
      </div>
    </AdForm>
  );
};

export default AdType;
