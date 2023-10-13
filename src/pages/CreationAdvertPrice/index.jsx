import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdPrice from '../../components/AdCreation/AdPrice';
import classes from './style.module.scss';
// import { dataServicePriceFilter } from '../../assets/constants/constants';
import Button from '../../ui/buttons/originButton/Button';
import { addServies } from '../../app/store/addServise/servies-action';

const CreationPriceServices = ({ getPrice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [price, setPrice] = useState({});
  const [validate, setValidate] = useState(false);
  // const date = useSelector((state) => state.addServies);
  // console.log(date.serviceType);

  const array = JSON.parse(localStorage.getItem('serviceType'));

  const handlePrice = () => {
    getPrice({ price });
    dispatch(addServies(price, 'price'));
    navigate('/advert-description', { replace: true });
  };
  console.log(array.serviceType);

  return (
    <section className={classes.price}>
      <h3 className={classes.price__title}>Стоимость услуг(и)</h3>
      <div className={classes.price__box}>
        {array.map(
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
