import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from '../../AdForm/style.module.scss';
import AdForm from '../../AdForm';
import CheckboxList from '../../../ChecboksList/index';
import { dogHandlerServiceOptions } from '../../../../assets/constants/constants';

const AdDogHandlerStepTwo = ({getInfo}) => {
  const [values, setValues] = useState({});
  console.log(values);

  useEffect(() => {getInfo(values)}, [values])
  
  return (
  <AdForm title='Какие форматы работы вы используете'>
    <div className={classes['af__checkbox-container']}>
      <CheckboxList 
      array={dogHandlerServiceOptions.arrDogHandlerStepTwo}
      getInfo={setValues}
      />

    </div>
  </AdForm>
);
};

AdDogHandlerStepTwo.propTypes = {
  getInfo: PropTypes.func,
};

AdDogHandlerStepTwo.defaultProps = {
  getInfo: () => {},
};

export default AdDogHandlerStepTwo;
