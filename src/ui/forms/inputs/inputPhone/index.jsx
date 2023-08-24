import TextMaskInput from 'react-text-mask';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from '../inputText/index.module.scss';
import validateInput from '../../../../assets/constants/validation';
import {
  maskPhone,
  placeholderPhone,
} from '../../../../assets/constants/constants';

const InputPhone = ({ type, infoInput }) => {
  const [tel, setTel] = useState('');
  const styleInput = cn(
    style.input,
    {
      [style['input-success']]: validateInput(type, tel).invalid,
    },
    { [style['input-error']]: !validateInput(type, tel).invalid },
  );
  const styleSpan = cn(
    style['input-span-error'],
    {
      [style['input-error_activ']]: !validateInput(type, tel).invalid,
    },
    {
      [style['input-span-true']]: validateInput(type, tel).invalid,
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
      <span className={styleSpan}>{validateInput(type, tel).message}</span>
    </div>
  );
};

InputPhone.propTypes = {
  type: PropTypes.string,
  infoInput: PropTypes.func,
};

InputPhone.defaultProps = {
  type: 'tel',
  infoInput: () => {},
};

export default InputPhone;
