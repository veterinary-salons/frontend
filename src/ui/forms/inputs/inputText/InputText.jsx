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
}) => {
  const [values, setValues] = useState({ [name]: '' });
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    if (initialValue) {
      setValues(initialValue);
    }
  }, []);

  useEffect(() => {
    getInput(values);
    // eslint-disable-next-line
  }, [values]);

  const handleEyePassword = (bool, typeInput) => (bool ? 'text' : typeInput);
  const getType = type === 'password' ? handleEyePassword(isClick, type) : type;
  const getClassItem = cn(
    style.input,
    {
      [style['input-default']]: validateInput(type, name, values[name]).default,
    },
    {
      [style['input-error']]: !validateInput(type, name, values[name]).invalid,
    },
    {
      [style['input-success']]: validateInput(type, name, values[name]).invalid,
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

  return (
    <div className={style.container}>
      <input
        className={getClassItem}
        type={getType}
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
  initialValue: PropTypes.objectOf(PropTypes.string),
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
};

export default InputText;
