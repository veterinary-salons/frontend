import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import CheckboxList from '../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../assets/constants/constants';

const AdPetSitter = ({ getInfo }) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    getInfo(values);
  }, [values]);

  return (
    <AdForm title="С какими задачами вы работаете">
      <div className={classes['af__checkbox-container']}>
        <CheckboxList
          array={dateServiceCheckboxList.arrAnimalsVeterinarian}
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
