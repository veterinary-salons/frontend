import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import CheckboxList from '../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../assets/constants/constants';
import { addService } from '../../../app/store/addService/service-action';

const AdVet = ({ getInfo }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const path = JSON.parse(localStorage.getItem('veterinarian'));
  const [validate, setValidate] = useState(false);

  localStorage.setItem('pet', JSON.stringify(values));

  useEffect(() => {
    getInfo(values);
    if (values.length > 0) {
      setValidate(true);
    }
    // eslint-disable-next-line
  }, [values]);

  const handleSubmit = () => {
    dispatch(addService(values, 'petType'));
  };

  return (
    <AdForm
      title="С какими животными вы работаете"
      step={path.category}
      activBtn={validate}
      onClick={handleSubmit}
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

AdVet.propTypes = {
  getInfo: PropTypes.func,
};

AdVet.defaultProps = {
  getInfo: () => {},
};

export default AdVet;
