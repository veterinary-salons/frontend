import { useEffect, useState } from 'react';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import CheckboxList from '../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../assets/constants/constants';

const AdDogHandler = () => {
  const [values, setValues] = useState([]);
  const path = JSON.parse(localStorage.getItem('veterinarian'));
  const [validate, setValidate] = useState(false);

  localStorage.setItem(
    'veterinarian',
    JSON.stringify({ ...path, petType: values }),
  );

  useEffect(() => {
    if (values.length > 0) {
      setValidate(true);
    }
    // eslint-disable-next-line
  }, [values]);

  return (
    <AdForm
      title="С какими задачами вы работаете"
      step={path.category}
      activBtn={validate}
    >
      <div className={classes['af__checkbox-container']}>
        <CheckboxList
          array={dateServiceCheckboxList.arrServiceList}
          getInfo={setValues}
        />
      </div>
    </AdForm>
  );
};

export default AdDogHandler;
