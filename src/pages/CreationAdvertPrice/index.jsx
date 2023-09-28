import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdPrice from '../../components/AdCreation/AdPrice';
import classes from './style.module.scss';
import { dataServicePriceFilter } from '../../assets/constants/constants';
import Button from '../../ui/buttons/originButton/Button';

const CreationPriceCervices = ({ getPrice }) => {
  const navigate = useNavigate();
  const [price, setPrice] = useState({});

  const handlePrice = () => {
    getPrice({ price });
    navigate('/advert-description', { replace: true });
  };

  return (
    <section className={classes.price}>
      <h3 className={classes.price__title}>Стоимость услуг(и)</h3>
      <div className={classes.price__box}>
        {dataServicePriceFilter.map((i) => (
          <AdPrice
            title={i.title}
            key={i.id}
            name={i.name}
            getPrice={setPrice}
            value={price}
          />
        ))}
      </div>
      <div className={classes['price__container-btn']}>
        <Button
          variant="outlined"
          size="medium"
          type="button"
          onClick={() => {
            navigate('/advert-schedule', { replace: true });
          }}
        >
          Назад
        </Button>
        <Button size="medium" type="button" onClick={handlePrice}>
          Далее
        </Button>
      </div>
    </section>
  );
};

CreationPriceCervices.propTypes = {
  getPrice: PropTypes.func,
};

CreationPriceCervices.defaultProps = {
  getPrice: () => {},
};

export default CreationPriceCervices;
