import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import classes from './style.module.scss';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';

const ChecboksList = ({ array }) => {
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
      console.log(values);
    },
    [setValues, values],
  );
  // const [obj, setObj] = useState('');
  console.log(infoInput);

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
      {array.map((i) => {
        console.log(i);

        return (
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
        );
      })}
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
    </div>
  );
};

ChecboksList.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string),
};

ChecboksList.defaultProps = {
  array: ['зооняня', 'кинолог', 'грумер', 'ветеринар'],
};

export default ChecboksList;
