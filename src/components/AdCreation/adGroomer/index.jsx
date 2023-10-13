import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import CheckboxList from '../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../assets/constants/constants';
import { addServies } from '../../../app/store/addServise/servies-action';

const AdGroomer = ({ getInfo }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState([]);
  const path = JSON.parse(localStorage.getItem('veterinarian'));
  const [validate, setValidate] = useState(false);
  const [text, setText] = useState('');

  localStorage.setItem('pet', JSON.stringify(values));

  useEffect(() => {
    getInfo(values);
    if (values.length > 0) {
      setValidate(true);
    }
    // eslint-disable-next-line
  }, [values]);
  const date = useSelector((state) => state.addServies);

  const handleSubmit = () => {
    dispatch(addServies(values, 'petType', date, text));
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
          setText={setText}
          array={dateServiceCheckboxList.arrAnimalsGroomer}
          getInfo={setValues}
        />
      </div>
    </AdForm>
  );
};

AdGroomer.propTypes = {
  getInfo: PropTypes.func,
};

AdGroomer.defaultProps = {
  getInfo: () => {},
};

export default AdGroomer;
