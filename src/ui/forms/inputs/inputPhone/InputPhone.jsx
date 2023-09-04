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

const InputPhone = ({ infoInput }) => {
  const typeTel = 'tel';
  const [tel, setTel] = useState('');
  const styleInput = cn(
    style.input,
    {
      [style['input-default']]: validateInput(typeTel, tel).default,
    },
    {
      [style['input-error']]: !validateInput(typeTel, tel).invalid,
    },
    {
      [style['input-success']]: validateInput(typeTel, tel).invalid,
    },
  );
  const styleSpan = cn(
    style['input-span-error'],
    {
      [style['input-error_activ']]: !validateInput(typeTel, tel).invalid,
    },
    {
      [style['input-span-true']]: validateInput(typeTel, tel).invalid,
    },
  );

  useEffect(() => {
    infoInput(tel);
  }, [tel]);

  return (
    <div className={style.container}>
      <TextMaskInput
        placeholder={placeholderPhone}
        className={styleInput}
        mask={maskPhone}
        onChange={(e) => setTel(e.target.value)}
      />
      <span className={styleSpan}>{validateInput(typeTel, tel).message}</span>
    </div>
  );
};

InputPhone.propTypes = {
  infoInput: PropTypes.func,
};

InputPhone.defaultProps = {
  infoInput: () => {},
};

export default InputPhone;
