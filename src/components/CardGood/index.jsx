import PropTypes from 'prop-types';
import { useState } from 'react';
import StarsBox from '../../ui/icons/starsBox/StarsBox';
import Button from '../../ui/buttons/originButton/Button';
import Heart from '../../ui/buttons/heart/Heart';
import CartProductQuantityBox from '../../ui/buttons/cartProductQuantityBox/index';
import classes from './style.module.scss';

const CardGood = ({
  prise,
  image,
  rating,
  weightProduct,
  descriptionProduct,
  reviews,
  counter,
}) => {
  const [sumCounter, setSumCounter] = useState(counter);
  return (
    <div className={classes.card}>
      <div className={[classes['card__container-heart']]}>
        <Heart />
      </div>
      {image ? (
        <img className={classes.card__image} alt="фото продукта" src={image} />
      ) : (
        <div className={[classes['card__default-img']]} />
      )}
      <h2 className={classes.card__prise}>{`${prise} р/шт`}</h2>
      <p className={classes.card__weight}>{`${weightProduct} г.`}</p>
      <p className={classes.card__description}>{descriptionProduct}</p>
      <StarsBox rating={rating} color="#F9D279" size="20px" />
      <p className={classes.card__reviews}>{`${reviews} отзывов`}</p>
      {sumCounter === 0 ? (
        <Button
          type="button"
          size="small"
          onClick={() => {
            setSumCounter(1);
          }}
        >
          В корзину
        </Button>
      ) : (
        <CartProductQuantityBox
          variant="primary"
          counter={sumCounter}
          infoCounter={setSumCounter}
        />
      )}
    </div>
  );
};

CardGood.propTypes = {
  prise: PropTypes.string,
  weightProduct: PropTypes.string,
  descriptionProduct: PropTypes.string,
  reviews: PropTypes.number,
  image: PropTypes.string,
  rating: PropTypes.string,
  counter: PropTypes.number,
};

CardGood.defaultProps = {
  prise: '353',
  weightProduct: '600',
  descriptionProduct:
    'Сухой корм для кошек Royal Conin для Стерилизованных Индейка для взрослых',
  reviews: 46,
  image: '',
  rating: '5.0',
  counter: 0,
};

export default CardGood;
