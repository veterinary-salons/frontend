import PropTypes from 'prop-types';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import style from './InputText.module.scss';
import validateInput from '../../../../assets/constants/validation';
import useFormAndValidation from '../../../../hooks/validation';
import BtnEye from '../../../buttons/hidePassword/BtnEye';

const InputText = ({
  type,
  placeholder,
  name,
  maxLength,
  minLength,
  required,
  setInput,
  disabled,
  id,
  position,
  autoComplete
}) => {
  const { values, handleChange } = useFormAndValidation();
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    setInput(values);
  }, [values]);

  const hendelEyePassword = (bool, typeInput) => (bool ? 'text' : typeInput);
  const getType = type === 'password' ? hendelEyePassword(isClick, type) : type;
  const getClassItem = cn(
    style.input,
    {
      [style['input-success']]: validateInput(type, name, values[name]).invalid,
    },
    { [style['input-error']]: !validateInput(type, name, values[name]).invalid },
  );
  const getClassSpan = cn(
    style['input-span-error'],
    {
      [style['input-error_activ']]: !validateInput(type, name, values[name]).invalid,
    },
    {
      [style['input-span-true']]: validateInput(type, name, values[name]).invalid,
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
        onChange={handleChange}
        value={values[name] || ''}
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
  setInput: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  position: PropTypes.string,
  autoComplete: PropTypes.string
};

InputText.defaultProps = {
  type: 'text',
  placeholder: 'Текст',
  name: 'input',
  maxLength: 8,
  minLength: 2,
  required: true,
  setInput: () => {},
  disabled: false,
  id: 'id',
  position: 'button-eye_position',
  autoComplete: ''
};

export default InputText;
