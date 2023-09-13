import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

const OrderInformation = ({ price, discount, cost, array, textBtn }) => {
  const navigate = useNavigate();
  const getClassTextgrey = classnames(
    classes.card__text,
    classes.card__text_grey,
  );

  return (
    <article className={classes.card}>
      {array.map((i) => (
        <div className={classes.card__container}>
          <h3 className={classes.card__title}>{i.title}</h3>
          <p className={getClassTextgrey}>{i.products}</p>
        </div>
      ))}

      <div className={classes.card__container_price}>
        <span className={classes.card__span}>{}</span>
        <p
          className={classnames(classes.card__text, classes.card__text_price)}
        >{`Всего: ${price} ₽`}</p>
        <p
          className={classnames(
            classes.card__text,
            classes.card__text_discount,
          )}
        >
          {`Скидка: ${discount === '' ? 0 : discount} ₽`}
        </p>
        <span className={classes.card__span}>{}</span>
      </div>

      <div className={classes.card__container}>
        <p className={classnames(classes.card__text, classes.card__text_sum)}>
          К оплате:
        </p>
        <p className={classes.card__title}>{`${cost} ₽`}</p>
      </div>

      <div className={classes.card__container}>
        <Button
          type="button"
          size="medium"
          onClick={() => {
            navigate('/');
          }}
        >
          {textBtn}
        </Button>
      </div>
    </article>
  );
};

OrderInformation.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      products: PropTypes.string,
    }),
  ),
  textBtn: PropTypes.oneOf(['Оформить заказ', 'К оформлению']),
  price: PropTypes.string,
  discount: PropTypes.string,
  cost: PropTypes.string,
};

OrderInformation.defaultProps = {
  array: [
    { title: 'Ваш заказ', products: '2 товара, 5,55 кг' },
    // { title: 'Доставка', products: 'Курьером' },
    // { title: 'Оплата', products: 'При получении' },
  ],
  textBtn: 'Оформить заказ',
  price: '1 040',
  discount: '340',
  cost: '700',
};

export default OrderInformation;
