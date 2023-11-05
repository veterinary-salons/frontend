import { useEffect, useState } from 'react';
import classes from '../../AdForm/style.module.scss';
import AdForm from '../../AdForm';
import CheckboxList from '../../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../../assets/constants/constants';

const AdDogHandlerStepTwo = () => {
  const [values, setValues] = useState({});
  const local = JSON.parse(localStorage.getItem('veterinarian'));
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    if (values.length > 0) {
      setValidate(true);
    }
    // eslint-disable-next-line
  }, [values]);

  localStorage.setItem(
    'veterinarian',
    JSON.stringify({ ...local, serviceType: values }),
  );

  return (
    <AdForm
      title="Какие форматы работы вы используете"
      step={local.category}
      activBtn={validate}
      //     onClick={handleSubmit}
    >
      <div className={classes['af__checkbox-container']}>
        <CheckboxList
          array={dateServiceCheckboxList.arrServiceFormat}
          getInfo={setValues}
        />
      </div>
    </AdForm>
  );
};

export default AdDogHandlerStepTwo;
