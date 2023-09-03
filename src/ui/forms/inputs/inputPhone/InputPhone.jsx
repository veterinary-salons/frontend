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
      [style['input-success']]: validateInput(typeTel, tel.tel).invalid,
    },
    { [style['input-error']]: !validateInput(typeTel, tel.tel).invalid },
  );
  const styleSpan = cn(
    style['input-span-error'],
    {
      [style['input-error_activ']]: !validateInput(typeTel, tel.tel).invalid,
    },
    {
      [style['input-span-true']]: validateInput(typeTel, tel.tel).invalid,
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
        onChange={(e) => setTel({ ...tel, [typeTel]: e.target.value })}
        value={tel.tel}
      />
      <span className={styleSpan}>
        {validateInput(typeTel, tel.tel).message}
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
