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
  infoInput,
  disabled,
  id,
  position,
}) => {
  const { values, handleChange } = useFormAndValidation();
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    infoInput(values);
  }, [values]);

  const handleEyePassword = (bool, typeInput) => (bool ? 'text' : typeInput);
  const getType = type === 'password' ? handleEyePassword(isClick, type) : type;
  const getClassItem = cn(
    style.input,
    {
      [style['input-default']]: validateInput(type, values[name]).default,
    },
    {
      [style['input-error']]: !validateInput(type, values[name]).invalid,
    },
    {
      [style['input-success']]: validateInput(type, values[name]).invalid,
    },
  );
  const getClassSpan = cn(
    style['input-span-error'],
    {
      [style['input-error_activ']]: !validateInput(type, values[name]).invalid,
    },
    {
      [style['input-span-true']]: validateInput(type, values[name]).invalid,
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
          {validateInput(type, values[name]).message}
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
  infoInput: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  position: PropTypes.string,
};

InputText.defaultProps = {
  type: 'text',
  placeholder: 'Текст',
  name: 'input',
  maxLength: 8,
  minLength: 2,
  required: true,
  infoInput: () => {},
  disabled: false,
  id: 'id',
  position: 'button-eye_position',
};

export default InputText;
