import PropTypes from 'prop-types';
import { useEffect } from 'react';
import cn from 'classnames';
import classes from './style.module.scss';
import validateInput from '../../../../assets/constants/validation';

const Textarea = ({
  value,
  setValue,
  placeholder,
  maxLength,
  name,
  id,
  setIsValid,
}) => {
  const getClassSpan = cn(classes['input-span-error'], {
    [classes['input-error_activ']]: !validateInput('textarea', undefined, value)
      .invalid,
  });

  useEffect(() => {
    setIsValid(validateInput('textarea', undefined, value).invalid);
    // eslint-disable-next-line
  }, [value]);

  return (
    <>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.textarea}
        maxLength={maxLength}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      <div className={classes['textarea__container-span']}>
        <span className={getClassSpan}>
          {validateInput('textarea', undefined, value).message}
        </span>
        <p
          className={cn(classes.textarea__validation, {
            [classes.textarea__validation_success]: value.length === 1000,
          })}
        >{`Символов: ${value.length === undefined ? 0 : value.length}/1000`}</p>
      </div>
    </>
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.string,
  setIsValid: PropTypes.func,
};

Textarea.defaultProps = {
  value: '',
  setValue: () => {},
  placeholder: 'Напишите что-то о своём опыте, чтобы привлечь пользователей',
  maxLength: 1000,
  name: 'description-textarea',
  id: 'textarea',
  setIsValid: () => {},
};

export default Textarea;
