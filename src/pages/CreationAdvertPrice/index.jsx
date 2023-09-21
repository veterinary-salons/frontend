import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdPrice from '../../components/AdCreation/AdPrice';
import classes from './style.module.scss';
import datapPrice from '../../assets/constants/DadaPrice';
import Button from '../../ui/buttons/originButton/Button';

const CreationPriceCervices = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState({});

  /**
   * здесь будет отправка price на сервер
   */
  console.log(price);

  return (
    <section className={classes.price}>
      <h2 className={classes.price__title}>Стоимость услуг(и)</h2>
      <div className={classes.price__box}>
        {datapPrice.map((i) => (
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
            navigate('/back', { replace: true });
          }}
        >
          Назад
        </Button>
        <Button
          size="medium"
          type="button"
          onClick={() => {
            navigate('/next', { replace: true });
          }}
        >
          Далее
        </Button>
      </div>
    </section>
  );
};

export default CreationPriceCervices;
