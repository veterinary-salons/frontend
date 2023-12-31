import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classes from './style.module.scss';
import InputPrice from '../../../ui/forms/inputs/inputPrice';

const AdPrice = ({ title, name, getPrice, value, getValidate, validate }) => {
  const [from, setFrom] = useState('0');
  const [befor, setBefor] = useState('0');
  const [valid, setValid] = useState(null);

  useEffect(() => {
    getPrice({
      ...value,
      [name]: {
        text: name,
        from,
        befor,
      },
    });
    setValid(Number(from) >= Number(befor));
    getValidate({ ...validate, [name]: Number(from) < Number(befor) });
    // eslint-disable-next-line
  }, [from, befor]);

  return (
    <div className={classes['form-prices__container']}>
      <p className={classes['form-prices__text']}>{title}</p>
      <InputPrice getInput={setFrom} name={name} valid={valid} />
      <InputPrice prefix="до" getInput={setBefor} name={name} valid={valid} />
    </div>
  );
};

AdPrice.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  getPrice: PropTypes.func.isRequired,
  value: PropTypes.shape().isRequired,
  getValidate: PropTypes.func,
  validate: PropTypes.shape(),
};

AdPrice.defaultProps = {
  title: 'Стерилизация',
  getValidate: () => {},
  validate: {},
};

export default AdPrice;
