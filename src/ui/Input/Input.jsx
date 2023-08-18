import PropTypes from 'prop-types';
import cn from 'classnames';
import { useState } from 'react';
import style from './Input.module.scss';
import validateInput from '../../assets/constants/validation';
import useFormAndValidation from '../../hooks/validation';
import BtnEye from '../BtnEye/BtnEye';

const Input = ({
  type,
  placeholder,
  name,
  maxLength,
  minLength,
  classStyle,
  required,
  autoComplete,
  ipfoInput,
  disabled,
}) => {
  const { values, isValid, handleChange } = useFormAndValidation();
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    ipfoInput(values);
  };

  return (
    <form className={style.container} onSubmit={handelSubmit}>
      <input
        className={cn(classStyle, {
          [style['input-success']]: !validateInput(type, values[name]).invalid,
        })}
        type={type}
        placeholder={placeholder}
        name={name}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        onChange={handleChange}
        value={values[name] || ''}
        autoComplete={autoComplete}
        disabled={disabled}
      />
      {type === 'password' && (
        <BtnEye
          btnStatus={isClick}
          onClike={handleClick}
          position="button-eye_position"
        />
      )}
      <span
        className={cn(style['input-error'], {
          [style['input-error_activ']]: !isValid,
        })}
      >
        {validateInput(type, values[name]).message}
      </span>
    </form>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  classStyle: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  ipfoInput: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  placeholder: 'Tекст',
  name: 'input',
  maxLength: 8,
  minLength: 2,
  classStyle: style.input,
  required: true,
  autoComplete: 'true',
  ipfoInput: () => {},
  disabled: true,
};

export default Input;
