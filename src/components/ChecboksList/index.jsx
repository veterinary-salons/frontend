import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import classes from './style.module.scss';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
// import rusToLat from '../../assets/constants/rusToLat';

const ChecboxList = ({ array, getInfo, inputActive }) => {
  const [chekboxInput, setChekboxInput] = useState(false);
  const [infoInput, setInfoInput] = useState('');
  const [values, setValues] = useState({});

  const handleCheckbox = () => {
    setChekboxInput(!chekboxInput);
  };

  const handleFormChange = useCallback(
    (value) => {
      setValues({
        ...values,
        ...value,
      });
    },
    [setValues, values],
  );

  useEffect(() => {
    getInfo(Object.values(values));
    // eslint-disable-next-line
  }, [values]);

  useEffect(() => {
    setInfoInput('');
    if (chekboxInput && infoInput.length > 2) {
      array.push(infoInput);
    }
    setChekboxInput(false);
    // eslint-disable-next-line
  }, [chekboxInput]);

  return (
    <div className={classes.list}>
      {array.map((i) => (
        <Checkbox
          key={Math.random()}
          name={i}
          value={i}
          checked={values[i]}
          htmlType="checkbox"
          getCheckbox={handleFormChange}
        >
          {i}
        </Checkbox>
      ))}
      {inputActive && (
        <div className={classes.list__container}>
          <Checkbox
            htmlType="checkbox"
            name="checkbox-input"
            checked={chekboxInput}
            getCheckbox={handleCheckbox}
            value="value"
          >
            <input
              className={classes.list__input}
              placeholder="Другое"
              onChange={(e) => setInfoInput(e.target.value)}
              value={infoInput}
            />
          </Checkbox>
        </div>
      )}
    </div>
  );
};

ChecboxList.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string),
  getInfo: PropTypes.func,
  inputActive: PropTypes.bool,
};

ChecboxList.defaultProps = {
  array: ['зооняня', 'кинолог', 'грумер', 'ветеринар'],
  getInfo: () => {},
  inputActive: true,
};

export default ChecboxList;
