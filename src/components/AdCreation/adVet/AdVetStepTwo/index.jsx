import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from '../../AdForm/style.module.scss';
import AdForm from '../../AdForm';
import CheckboxList from '../../../ChecboksList/index';
import { dateSevriceCheckboxList } from '../../../../assets/constants/constants';

const AdVetStepTwo = ({getInfo}) => {
  const [values, setValues] = useState({});
  console.log(values);

  useEffect(() => {getInfo(values)}, [values])
  
  return (
  <AdForm title='Какие именно услуги оказываете'>
    <div className={classes['af__checkbox-container']}>
      <CheckboxList 
      array={dateSevriceCheckboxList.arrServiceVeterinarian}
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
