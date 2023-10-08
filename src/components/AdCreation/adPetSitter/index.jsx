import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import CheckboxList from '../../ChecboksList/index';
import { dateSevriceCheckboxList } from '../../../assets/constants/constants';

const AdPetSitter = ({getInfo}) => {
  const [values, setValues] = useState({});
  console.log(values);

  useEffect(() => {getInfo(values)}, [values])

  return (
    <AdForm title="С какими животными вы работаете">
      <div className={classes['af__checkbox-container']}>
        <CheckboxList
          array={dateSevriceCheckboxList.arrAnimalsVeterinarian}
          getInfo={setValues}
        />
      </div>
    </AdForm>
  );
};

AdPetSitter.propTypes = {
  getInfo: PropTypes.func,
};

AdPetSitter.defaultProps = {
  getInfo: () => {},
};

export default AdPetSitter;
