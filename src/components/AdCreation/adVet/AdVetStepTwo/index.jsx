import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from '../../AdForm/style.module.scss';
import AdForm from '../../AdForm';
import CheckboxList from '../../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../../assets/constants/constants';

const AdVetStepTwo = ({ getInfo }) => {
  const [values, setValues] = useState({});
  console.log(values);
  const path = JSON.parse(localStorage.getItem('veterinarian'));

  useEffect(() => {
    getInfo(values);
    // eslint-disable-next-line
  }, [values]);

  return (
    <AdForm title="Какие именно услуги оказываете" step={path.category}>
      <div className={classes['af__checkbox-container']}>
        <CheckboxList
          array={dateServiceCheckboxList.arrServiceVeterinarian}
          getInfo={setValues}
          inputActive={false}
        />
      </div>
    </AdForm>
  );
};

AdVetStepTwo.propTypes = {
  getInfo: PropTypes.func,
};

AdVetStepTwo.defaultProps = {
  getInfo: () => {},
};

export default AdVetStepTwo;
