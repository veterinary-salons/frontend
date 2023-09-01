import PropTypes from 'prop-types';
import { useState } from 'react';
import StarsBox from '../../ui/icons/starsBox/StarsBox';
import Button from '../../ui/buttons/originButton/Button';
import Heart from '../../ui/buttons/heart/Heart';
import ProductCardQuantityBox from '../../ui/buttons/ProductCardQuantityBox/index';
import defaultImg from '../../assets/images/icon/paw/paw-img-card.svg';
import classes from './style.module.scss';

const CardGood = ({
  price,
  image,
  rating,
  weightProduct,
  descriptionProduct,
  reviews,
  counter,
}) => {
  const [sumCounter, setSumCounter] = useState(counter);
  const [isLike, setIsLike] = useState(false);

  const handleClickLike = () => {
    setIsLike((state) => !state);
  };

  return (
    <div className={classes.card}>
      <div className={[classes['card__container-heart']]}>
        <Heart isActive={isLike} onClick={handleClickLike} />
      </div>
      {image ? (
        <img className={classes.card__image} alt="фото продукта" src={image} />
      ) : (
        <div className={[classes['card__default-img']]}>
          <img
            className={[classes['card__img-paw']]}
            src={defaultImg}
            alt="лапка"
          />
        </div>
      )}
      <h2 className={classes.card__price}>{`${price} р/шт`}</h2>
      <p className={classes.card__weight}>{`${weightProduct} г.`}</p>
      <p className={classes.card__description}>{descriptionProduct}</p>
      <div className={classes.card__container}>
        <StarsBox
          action="filled"
          rating={rating}
          color="var(--yellow-color)"
          size="22px"
        />
        <p className={classes.card__reviews}>
          {reviews > 0 ? `${reviews} отзывов` : 'пока нет отзывов'}
        </p>
      </div>
      {sumCounter === 0 ? (
        <Button
          type="button"
          size="medium"
          isMaxWidth
          onClick={() => {
            setSumCounter(1);
          }}
        >
          В корзину
        </Button>
      ) : (
        <ProductCardQuantityBox
          variant="primary"
          counter={sumCounter}
          getCounterNum={setSumCounter}
        />
      )}
    </div>
  );
};

CardGood.propTypes = {
  price: PropTypes.string,
  weightProduct: PropTypes.string,
  descriptionProduct: PropTypes.string,
  reviews: PropTypes.number,
  image: PropTypes.string,
  rating: PropTypes.number,
  counter: PropTypes.number,
};

CardGood.defaultProps = {
  price: '353',
  weightProduct: '600',
  descriptionProduct:
    'Сухой корм для кошек Royal Conin для Стерилизованных Индейка для взрослых',
  reviews: 46,
  image: '',
  rating: '5.0',
  counter: 0,
};

export default CardGood;
