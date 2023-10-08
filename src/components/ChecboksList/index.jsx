import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import classes from './style.module.scss';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';

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
      array.push({
        name: infoInput,
        value: infoInput,
        lebel: infoInput,
        id: Math.random() * 10,
      });
    }
    setChekboxInput(false);
    // eslint-disable-next-line
  }, [chekboxInput]);

  return (
    <div className={classes.list}>
      {array.map((i) => (
        <Checkbox
          key={i.id}
          name={i.name}
          value={i.value}
          checked={
            i.name ? values[i.name] === i.value : values[i.value] === i.value
          }
          htmlType="checkbox"
          getCheckbox={handleFormChange}
        >
          {i.lebel}
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
  array: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      lebele: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  getInfo: PropTypes.func,
  inputActive: PropTypes.bool,
};

ChecboxList.defaultProps = {
  getInfo: () => {},
  inputActive: true,
};

export default ChecboxList;
