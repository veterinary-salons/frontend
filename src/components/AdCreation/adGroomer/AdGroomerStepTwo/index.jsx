import { useEffect, useState } from 'react';
import classes from '../../AdForm/style.module.scss';
import AdForm from '../../AdForm';
import CheckboxList from '../../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../../assets/constants/constants';

const AdGroomerStepTwo = () => {
  const [values, setValues] = useState({});
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    if (values.length > 0) {
      setValidate(true);
    }
    // eslint-disable-next-line
  }, [values]);

  const local = JSON.parse(localStorage.getItem('veterinarian'));
  localStorage.setItem(
    'veterinarian',
    JSON.stringify({ ...local, serviceType: values }),
  );

  return (
    <AdForm
      title="Какой груминг вы можете сделать"
      step={local.category}
      activBtn={validate}
    >
      <div className={classes['af__checkbox-container']}>
        <CheckboxList
          array={dateServiceCheckboxList.arrServiceGroomer}
          getInfo={setValues}
          inputActive={false}
        />
      </div>
    </AdForm>
  );
};

export default AdGroomerStepTwo;
