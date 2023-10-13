import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import classes from '../../AdForm/style.module.scss';
import AdForm from '../../AdForm';
import CheckboxList from '../../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../../assets/constants/constants';
import { addServies } from '../../../../app/store/addServise/servies-action';

const AdGroomerStepTwo = ({ getInfo }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const path = JSON.parse(localStorage.getItem('veterinarian'));
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    getInfo(values);
    if (values.length > 0) {
      setValidate(true);
    }
    // eslint-disable-next-line
  }, [values]);

  localStorage.setItem('serviceType', JSON.stringify(values));

  const handleSubmit = () => {
    dispatch(addServies(values, 'serviceType'));
  };

  return (
    <AdForm
      title="Какой груминг вы можете сделать"
      step={path.category}
      activBtn={validate}
      onClick={handleSubmit}
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

AdGroomerStepTwo.propTypes = {
  getInfo: PropTypes.func,
};

AdGroomerStepTwo.defaultProps = {
  getInfo: () => {},
};

export default AdGroomerStepTwo;
