import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

const OrderInformation = ({
  delivery,
  products,
  weightProducts,
  courier,
  payment,
  price,
  discount,
  cost,
}) => {
  const navigate = useNavigate();
  const getClassTextgrey = classnames(
    classes.card__text,
    classes.card__text_grey,
  );

  return (
    <article
      className={classnames(classes.card, { [classes.card_gap]: delivery })}
    >
      <div className={classes.card__container}>
        <h3 className={classes.card__title}>Ваш заказ</h3>
        <p className={getClassTextgrey}>{`${products}, ${weightProducts}`}</p>
      </div>

      {delivery && (
        <>
          <div className={classes.card__container_delivery}>
            <h3 className={classes.card__title}>Доставка</h3>
            <p className={getClassTextgrey}>{courier}</p>
          </div>
          <div className={classes.card__container_payment}>
            <h3 className={classes.card__title}>Оплата</h3>
            <p className={getClassTextgrey}>{payment}</p>
          </div>
        </>
      )}

      <div className={classes.card__container_price}>
        <span className={classes.card__span}>{}</span>
        <p
          className={classnames(
            classes.card__text,
            {
              [classes.card__text_price]: !delivery,
            },
            {
              [classes['card__text_price-top']]: delivery,
            },
          )}
        >{`Всего: ${price} ₽`}</p>
        <p
          className={classnames(
            classes.card__text,
            classes.card__text_discount,
            { [classes['card__text_delivery-bottom']]: delivery },
          )}
        >
          {`Скидка: ${discount === '' ? 0 : discount} ₽`}
        </p>
        <span className={classes.card__span}>{}</span>
      </div>

      <div className={classes.card__container}>
        <p className={classes.card__text}>К оплате:</p>
        <p
          className={classnames(classes.card__text, classes.card__text_black, {
            [classes.card__text_delivery]: delivery,
          })}
        >
          {`${cost} ₽`}
        </p>
      </div>

      <div className={classes.card__container}>
        <Button
          type="button"
          size="medium"
          onClick={() => {
            navigate('/');
          }}
        >
          {delivery ? 'Оформить заказ' : 'К оформлению'}
        </Button>
      </div>
    </article>
  );
};

OrderInformation.propTypes = {
  delivery: PropTypes.bool,
  products: PropTypes.string,
  weightProducts: PropTypes.string,
  courier: PropTypes.string,
  payment: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.string,
  cost: PropTypes.string,
};

OrderInformation.defaultProps = {
  delivery: true,
  products: '2 товара',
  weightProducts: '5,55 кг',
  courier: 'Курьером',
  payment: 'При получении',
  price: '1 040',
  discount: '340',
  cost: '700',
};

export default OrderInformation;
