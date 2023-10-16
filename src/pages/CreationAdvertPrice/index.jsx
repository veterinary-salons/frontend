import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdPrice from '../../components/AdCreation/AdPrice';
import classes from './style.module.scss';
// import { dataServicePriceFilter } from '../../assets/constants/constants';
import Button from '../../ui/buttons/originButton/Button';
// import { addService } from '../../app/store/addService/service-action';

const CreationPriceServices = ({ getPrice }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [price, setPrice] = useState({});
  const [validate, setValidate] = useState(false);
  // const date = useSelector((state) => state.addService);
  // console.log(date.serviceType);

  const array = JSON.parse(localStorage.getItem('veterinarian'));

  localStorage.setItem(
    'veterinarian',
    JSON.stringify({ ...array, price: [Object.values(price)] }),
  );

  const handlePrice = () => {
    getPrice({ price });
    //  dispatch(addService(price, 'price'));
    navigate('/advert-description', { replace: true });
  };

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
          // active={validate}
        >
          Далее
        </Button>
      </div>
    </section>
  );
};

CreationPriceServices.propTypes = {
  getPrice: PropTypes.func,
};

CreationPriceServices.defaultProps = {
  getPrice: () => {},
};

export default CreationPriceServices;
