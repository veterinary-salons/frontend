import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from '../../AdForm/style.module.scss';
import AdForm from '../../AdForm';
import CheckboxList from '../../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../../assets/constants/constants';

const AdGroomerStepTwo = ({ getInfo }) => {
  const [values, setValues] = useState({});
  console.log(values);
  const path = JSON.parse(localStorage.getItem('veterinarian'));

  useEffect(() => {
    getInfo(values);
    // eslint-disable-next-line
  }, [values]);

  return (
    <AdForm title="Какие форматы работы вы используете" step={path.category}>
      <div className={classes['af__checkbox-container']}>
        <CheckboxList
          array={dateServiceCheckboxList.arrServiceGroomer}
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
