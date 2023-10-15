import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import Checkbox from '../../../ui/forms/checkboxes/checkbox/checkbox';
import { dateServiceCheckboxList } from '../../../assets/constants/constants';
import { addService } from '../../../app/store/addService/service-action';

const AdType = () => {
  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  const veterinarInfo = localStorage.setItem(
    'veterinarian',
    JSON.stringify(values),
  );

  const handleSubmit = () => {
    dispatch(addService(values.category, 'specialization', veterinarInfo));
  };

  return (
    <AdForm
      title="Какую услугу вы хотите оказать?"
      step={values.category}
      activBtn={values.category !== undefined}
      onClick={handleSubmit}
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
