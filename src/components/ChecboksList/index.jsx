import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import classes from './style.module.scss';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import validateInput from '../../assets/constants/validation';
import { checkErrorinput } from '../../assets/constants/checkArray';

const ChecboxList = ({ array, getInfo, inputActive, setText }) => {
  const [chekboxInput, setChekboxInput] = useState(false);
  const [infoInput, setInfoInput] = useState('');
  const [values, setValues] = useState([]);

  const arrBool = array.map((i) => i.name === infoInput);

  const getClasseInput = cn(
    classes.list__input,
    {
      [classes.list__input_error]: checkErrorinput(arrBool),
    },
    {
      [classes.list__input_success]: validateInput('checkbox', null, {
        array,
        infoInput,
      }).invalid,
    },
  );

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
    setText(infoInput);
    // eslint-disable-next-line
  }, [infoInput]);

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
      });
    }
    setChekboxInput(false);
    // eslint-disable-next-line
  }, [chekboxInput]);

  return (
    <div className={classes.list}>
      {array.map((i) => (
        <Checkbox
          key={i.name}
          name={i.name}
          value={i.value}
          checked={
            i.name ? values[i.name] === i.value : values[i.value] === i.value
          }
          htmlType="checkbox"
          getCheckbox={handleFormChange}
        >
          {i.name}
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
            disabled={checkErrorinput(arrBool)}
          >
            <input
              className={getClasseInput}
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
  setText: PropTypes.func,
};

ChecboxList.defaultProps = {
  getInfo: () => {},
  inputActive: true,
  setText: () => {},
};

export default ChecboxList;
