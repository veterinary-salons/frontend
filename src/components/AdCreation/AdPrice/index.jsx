import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';
import InputPrice from '../../../ui/forms/inputs/inputPrice';

const AdPrice = ({ title, name, getPrice, value }) => {
  const [form, setForm] = useState('0');
  const [befor, setBefor] = useState('0');

  useEffect(() => {
    getPrice({
      ...value,
      [name]: {
        text: name,
        form,
        befor,
      },
    });
    // eslint-disable-next-line
  }, [form, befor]);

  return (
    <div className={classes['form-prices__container']}>
      <p className={classes['form-prices__text']}>{title}</p>
      <InputPrice getInput={setForm} name={name} />
      <InputPrice prefix="до" getInput={setBefor} name={name} />
    </div>
  );
};

AdPrice.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  getPrice: PropTypes.func.isRequired,
  value: PropTypes.shape().isRequired,
};

AdPrice.defaultProps = {
  title: 'Стерилизация',
};

export default AdPrice;
