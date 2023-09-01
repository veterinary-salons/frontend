import PropTypes from 'prop-types';
import classnames from 'classnames';
import classes from './style.module.scss';
import { arrImgOrderCard } from '../../assets/constants/constants';
import defaultImg from '../../assets/images/icon/paw/paw-img-card.svg';
import Button from '../../ui/buttons/originButton/Button';

const OrderCard = ({
  title,
  orderDate,
  orderNumber,
  dateDelivery,
  deliveryMethod,
  amountDelivery,
  images,
}) => {
  const getClassTitle = classnames(
    classes.product__title,
    {
      [classes.product__title_green]: title === 'Доставлен',
    },
    {
      [classes.product__title_purple]: title === 'В пути',
    },
    {
      [classes.product__title_red]: title === 'Отменён',
    },
  );

  return (
    <article className={classes.product}>
      <h3 className={getClassTitle}>{title}</h3>

      <div className={classes.product__container}>
        <p
          className={(classes.product__text, classes.product__text_color)}
        >{`Заказ от ${orderDate}`}</p>
        <p className={classes.product__text}>{`№ ${orderNumber}`}</p>
      </div>

      <div className={classes.product__container}>
        <p className={classes.product__text}>{`Доставлен: ${dateDelivery}`}</p>
        <p className={(classes.product__text, classes.product__text_color)}>
          {deliveryMethod}
        </p>
      </div>

      <div className={classes.product__container}>
        <p className={(classes.product__text, classes.product__text_color)}>
          Сумма заказа:
        </p>
        <p className={classes.product__text}>{`${amountDelivery} ₽`}</p>
      </div>

      <div className={classes['product__container-img']}>
        {images.map(
          (item, index) =>
            index < 3 && (
              <img
                className={classes.product__img}
                key={item.id}
                // на случай, если нет в arr карточки товара
                src={item.img || defaultImg}
                alt="товара"
              />
            ),
        )}
      </div>

      <Button
        variant="outlined"
        size="medium"
        type="button"
        isMaxWidth
        onClick={() => {}}
      >
        Оценить
      </Button>
    </article>
  );
};
/**
 * скорее всего типы придется переделывать,
 * т.к. мы не знаем какие данные буду приходить с бэка
 */
OrderCard.propTypes = {
  title: PropTypes.oneOf(['Доставлен', 'В пути', 'Отменён']),
  orderDate: PropTypes.string,
  orderNumber: PropTypes.number,
  dateDelivery: PropTypes.string,
  deliveryMethod: PropTypes.string,
  amountDelivery: PropTypes.string,
  images: PropTypes.arrayOf([PropTypes.string]),
};

OrderCard.defaultProps = {
  title: 'Доставлен',
  orderDate: '26.07.2023',
  orderNumber: 67894,
  dateDelivery: '27.07.2023',
  deliveryMethod: 'Курьером',
  amountDelivery: '5 980',
  images: arrImgOrderCard,
};

export default OrderCard;
