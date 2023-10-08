import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from '../../AdForm/style.module.scss';
import AdForm from '../../AdForm';
import CheckboxList from '../../../ChecboksList/index';
import { dateSevriceCheckboxList } from '../../../../assets/constants/constants';

const AdGroomerStepTwo = ({getInfo}) => {
  const [values, setValues] = useState({});
  console.log(values);

  useEffect(() => {getInfo(values)}, [values])
  
  return (
  <AdForm title='Какие форматы работы вы используете'>
    <div className={classes['af__checkbox-container']}>
      <CheckboxList 
      array={dateSevriceCheckboxList.arrServiceGroomer}
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
