import TextMaskInput from 'react-text-mask';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './InputPhone.module.scss';
import validateInput from '../../../../assets/constants/validation';
import {
  maskPhone,
  placeholderPhone,
} from '../../../../assets/constants/constants';

const InputPhone = ({ getInput, initialValue, getValid }) => {
  const typeTel = 'tel';
  const [tel, setTel] = useState(initialValue);
  const styleInput = cn(
    style.input,
    {
      [style['input-error']]: validateInput(typeTel, undefined, tel.tel).err,
    },
    {
      [style['input-success']]: validateInput(typeTel, undefined, tel.tel)
        .invalid,
    },
  );
  const styleSpan = cn(
    style['input-span-error'],
    {
      [style['input-error_activ']]: !validateInput(typeTel, undefined, tel.tel)
        .invalid,
    },
    {
      [style['input-span-true']]: validateInput(typeTel, undefined, tel.tel)
        .invalid,
    },
  );

  useEffect(() => {
    getInput(tel);
    // eslint-disable-next-line
  }, [tel]);

  useEffect(() => {
    getValid((state) => ({
      ...state,
      [typeTel]: validateInput(typeTel, undefined, tel.tel).invalid,
    }));
  }, [validateInput(typeTel, undefined, tel.tel).invalid]);

  return (
    <div className={style.container}>
      <TextMaskInput
        autoComplete="tel"
        placeholder={placeholderPhone}
        className={styleInput}
        mask={maskPhone}
        onChange={(e) => setTel({ ...tel, [typeTel]: e.target.value })}
        value={tel.tel}
      />
      <span className={styleSpan}>
        {validateInput(typeTel, undefined, tel.tel).message}
      </span>
    </div>
  );
};

InputPhone.propTypes = {
  getInput: PropTypes.func,
  initialValue: PropTypes.objectOf(PropTypes.string),
  getValid: PropTypes.func,
};

InputPhone.defaultProps = {
  getInput: () => {},
  initialValue: {},
  getValid: () => {},
};

export default InputPhone;
