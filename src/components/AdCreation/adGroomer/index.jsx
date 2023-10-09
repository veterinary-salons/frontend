import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from '../AdForm/style.module.scss';
import AdForm from '../AdForm';
import CheckboxList from '../../ChecboksList/index';
import { dateServiceCheckboxList } from '../../../assets/constants/constants';

const AdGroomer = ({ getInfo }) => {
  const [values, setValues] = useState({});
  console.log(values);
  const path = JSON.parse(localStorage.getItem('veterinarian'));

  useEffect(() => {
    getInfo(values);
    // eslint-disable-next-line
  }, [values]);

  return (
    <AdForm title="С какими животными вы работаете" step={path.category}>
      <div className={classes['af__checkbox-container']}>
        <CheckboxList
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
