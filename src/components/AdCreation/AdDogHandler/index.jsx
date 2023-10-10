import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import CheckboxList from '../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../assets/constants/constants';

const AdDogHandler = ({ getInfo }) => {
  const [values, setValues] = useState([]);
  console.log(values);
  const path = JSON.parse(localStorage.getItem('veterinarian'));

  useEffect(() => {
    getInfo(values);
    // eslint-disable-next-line
  }, [values]);

  return (
    <AdForm title="С какими задачами вы работаете" step={path.category}>
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
