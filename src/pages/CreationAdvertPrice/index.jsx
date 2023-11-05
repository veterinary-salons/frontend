import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdPrice from '../../components/AdCreation/AdPrice';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';
import { checkArray } from '../../assets/constants/checkArray';

const CreationPriceServices = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState({});
  const [validate, setValidate] = useState({});
  const [boolArr, setBoolArr] = useState(null);

  const array = JSON.parse(localStorage.getItem('veterinarian'));

  localStorage.setItem(
    'veterinarian',
    JSON.stringify({ ...array, price: Object.values(price) }),
  );

  const handlePrice = () => {
    navigate('/advert-description', { replace: true });
  };

  useEffect(() => {
    setBoolArr(Object.values(validate));
  }, [validate]);

  return (
    <section className={classes.price}>
      <h3 className={classes.price__title}>Стоимость услуг(и)</h3>
      <div className={classes.price__box}>
        {array.serviceType.map(
          (i) =>
            i !== null && (
              <AdPrice
                title={i}
                key={i}
                name={i}
                getPrice={setPrice}
                value={price}
                getValidate={setValidate}
                validate={validate}
              />
            ),
        )}
      </div>
      <div className={classes['price__container-btn']}>
        <Button
          variant="outlined"
          size="medium"
          type="button"
          onClick={() => {
            navigate(navigate('/advert-schedule'), { replace: true });
          }}
        >
          Назад
        </Button>
        <Button
          size="medium"
          type="button"
          onClick={handlePrice}
          active={checkArray(boolArr)}
        >
          Далее
        </Button>
      </div>
    </section>
  );
};

export default CreationPriceServices;
