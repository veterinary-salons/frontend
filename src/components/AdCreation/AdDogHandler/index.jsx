import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import CheckboxList from '../../ChecboksList/index';
import { dogHandlerServiceOptions } from '../../../assets/constants/constants';

const AdDogHandler = ({getInfo}) => {
  const [values, setValues] = useState({});
  console.log(values);

  useEffect(() => {getInfo(values)}, [values])

  return (
    <AdForm title="С какими задачами вы работаете">
      <div className={classes['af__checkbox-container']}>
        <CheckboxList
          array={dogHandlerServiceOptions.arrDogHandler}
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
