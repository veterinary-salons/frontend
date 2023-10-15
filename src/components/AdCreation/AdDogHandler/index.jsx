import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import CheckboxList from '../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../assets/constants/constants';
import { addService } from '../../../app/store/addService/service-action';

const AdDogHandler = ({ getInfo }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState([]);
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
      title="С какими задачами вы работаете"
      step={path.category}
      activBtn={validate}
      onClick={handleSubmit}
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

AdDogHandler.propTypes = {
  getInfo: PropTypes.func,
};

AdDogHandler.defaultProps = {
  getInfo: () => {},
};

export default AdDogHandler;
