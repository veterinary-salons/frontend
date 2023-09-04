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

const InputPhone = ({ infoInput, initialValue }) => {
  const typeTel = 'tel';
  const [tel, setTel] = useState(initialValue);
  const styleInput = cn(
    style.input,
    {
      [style['input-default']]: validateInput(typeTel, undefined, tel.tel).default,
    },
    {
      [style['input-error']]: !validateInput(typeTel, undefined, tel.tel).invalid,
    },
    {
      [style['input-success']]: validateInput(typeTel, undefined, tel.tel).invalid,
    },
  );
  const styleSpan = cn(
    style['input-span-error'],
    {
      [style['input-error_activ']]: !validateInput(typeTel, undefined, tel.tel).invalid,
    },
    {
      [style['input-span-true']]: validateInput(typeTel, undefined, tel.tel).invalid,
    },
  );

  useEffect(() => {
    infoInput(tel);
  }, [tel]);

  return (
    <div className={style.container}>
      <TextMaskInput
        autoComplete='tel'
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
  infoInput: PropTypes.func,
  initialValue: PropTypes.objectOf(PropTypes.string),
};

InputPhone.defaultProps = {
  infoInput: () => {},
  initialValue: {},
};

export default InputPhone;
