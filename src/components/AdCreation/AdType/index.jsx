import { useState, useCallback } from 'react';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import Checkbox from '../../../ui/forms/checkboxes/checkbox/checkbox';
// import { adTypeOptions } from '../../../assets/constants/adCreationData';

const AdType = () => {
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
    <AdForm title="Какую услугу вы хотите оказать?" step='step-two'>
      <div className={classes['af__checkbox-container']}>
          <Checkbox
          type="radio"
          checked={false}
          htmlType="radio"
          value='grooming'
          name='serviceType'
          getCheckbox={handleFormChange}
        >
          груминг
        </Checkbox>
        <Checkbox
         type="radio"
         checked={false}
         htmlType="radio"
         value='pet-health'
         name='serviceType'
         getCheckbox={handleFormChange}
         >ветеринария
         </Checkbox>
        <Checkbox
         type="radio"
         checked={false}
         htmlType="radio"
         value='pet-sitting'
         name='serviceType'
         getCheckbox={handleFormChange}
         >передержка
         </Checkbox>
        <Checkbox
         type="radio"
         checked={false}
         htmlType="radio"
         value='cynology'
         name='serviceType'
         getCheckbox={handleFormChange}
         >кинология
         </Checkbox>
      </div>
    </AdForm>
  );
};

export default AdType;
