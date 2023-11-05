import { useEffect, useState } from 'react';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import CheckboxList from '../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../assets/constants/constants';

const AdVet = () => {
  const [values, setValues] = useState({});
  const [validate, setValidate] = useState(false);

  const local = JSON.parse(localStorage.getItem('veterinarian'));
  localStorage.setItem(
    'veterinarian',
    JSON.stringify({ ...local, serviceType: values }),
  );

  useEffect(() => {
    if (values.length > 0) {
      setValidate(true);
    }
    // eslint-disable-next-line
  }, [values]);

  return (
    <AdForm
      title="С какими животными вы работаете"
      step={local.category}
      activBtn={validate}
    >
      <div className={classes['af__checkbox-container']}>
        <CheckboxList
          array={dateServiceCheckboxList.arrAnimalsVeterinarian}
          getInfo={setValues}
        />
      </div>
    </AdForm>
  );
};

export default AdVet;
