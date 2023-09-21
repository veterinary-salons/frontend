import PropTypes from 'prop-types';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import style from './InputText.module.scss';
import validateInput from '../../../../assets/constants/validation';
import BtnEye from '../../../buttons/hidePassword/BtnEye';

const InputText = ({
  type,
  placeholder,
  name,
  maxLength,
  minLength,
  required,
  getInput,
  disabled,
  id,
  position,
  autoComplete,
  initialValue,
  getValid,
  max,
}) => {
  const [values, setValues] = useState({ [name]: '' });
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    if (initialValue) {
      setValues({ ...values, ...initialValue });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getValid(validateInput(type, name, values[name]).invalid);
  }, [validateInput(type, name, values[name]).invalid]);

  useEffect(() => {
    getInput(values);
    // eslint-disable-next-line
  }, [values]);
  const handleEyePassword = (bool, typeInput) => (bool ? 'text' : typeInput);
  const getType = type === 'password' ? handleEyePassword(isClick, type) : type;
  const getClassItem = cn(
    style.input,
    {
      [style.input_default]: validateInput(type, name, values[name]).default,
    },
    {
      [style.input_error]: !validateInput(type, name, values[name]).invalid,
    },
    {
      [style.input_success]: validateInput(type, name, values[name]).invalid,
    },
    {
      [style['input_text-center']]: type === 'number',
    },
  );
  const getClassSpan = cn(
    style['input-span-error'],
    {
      [style['input-error_activ']]: !validateInput(type, name, values[name])
        .invalid,
    },
    {
      [style['input-span-true']]: validateInput(type, name, values[name])
        .invalid,
    },
  );

  useEffect(() => {
    if (type === 'number' && values[name]) {
      setValues({
        ...values,
        [name]: +values[name].toString().replace(/\D/g, ''),
      });
    }
  }, [values[name]]);

  console.log(name, initialValue[name]);

  return (
    <div className={style.container}>
      <input
        className={getClassItem}
        type={getType === 'number' ? 'text' : getType}
        placeholder={placeholder}
        name={name}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        onChange={(e) => setValues({ ...values, [name]: e.target.value })}
        value={values[name]}
        disabled={disabled}
        id={id}
        autoComplete={autoComplete}
        max={max}
      />
      {type === 'password' && (
        <BtnEye
          btnStatus={isClick}
          onClike={handleClick}
          position={position || 'button-eye_position'}
        />
      )}
      {!disabled && (
        <span className={getClassSpan}>
          {validateInput(type, name, values[name]).message}
        </span>
      )}
    </div>
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  required: PropTypes.bool,
  getInput: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  position: PropTypes.string,
  autoComplete: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  initialValue: PropTypes.objectOf(PropTypes.any),
  getValid: PropTypes.func,
  max: PropTypes.string,
};

InputText.defaultProps = {
  type: 'text',
  placeholder: 'Текст',
  name: 'input',
  maxLength: 8,
  minLength: 2,
  required: true,
  getInput: () => {},
  disabled: false,
  id: 'id',
  position: 'button-eye_position',
  autoComplete: '',
  initialValue: null,
  getValid: () => {},
  max: null,
};

export default InputText;
