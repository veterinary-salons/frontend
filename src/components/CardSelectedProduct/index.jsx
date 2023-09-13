import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useState } from 'react';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import CartProductQuantityBox from '../../ui/buttons/cartProductQuantityBox';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';
import defaltImg from '../../assets/images/images/card-selected-product/img-default.svg';

const CardSelectedProduct = ({
  productDescription,
  weight,
  img,
  discount,
  funcBtn,
}) => {
  const [checked, setChecked] = useState(false);
  console.log(typeof checked);
  console.log(checked);

  return (
    <article className={classes.card}>
      <Checkbox
        type="checkbox"
        htmlType="checkbox"
        value="checb"
        name="checkbox-product"
        getCheckbox={setChecked}
        checked={checked['checkbox-product']}
      />
      <img
        className={classes.card__img}
        src={img || defaltImg}
        alt="фото продукта"
      />
      <div className={classes['card__container-info']}>
        <p className={classes.card__text}>{productDescription}</p>
        <p className={classnames(classes.card__text, classes.card__text_grey)}>
          {`${weight} кг`}
        </p>
        <CartProductQuantityBox counter={1} />
      </div>

      <div className={classes['card__container-price']}>
        <div>
          <h4 className={classes.card__text_price}>{`${353} ₽/шт`}</h4>
          {discount && (
            <h4
              className={classnames(
                classes.card__text,
                classes.card__text_discount,
              )}
            >{`${discount} ₽/шт`}</h4>
          )}
        </div>

        <div className={classes['card__container-btn-heart']}>
          <Button size="small" variant="outlined" onClick={funcBtn} isMaxWidth>
            Удалить
          </Button>
        </div>
      </div>
    </article>
  );
};

CardSelectedProduct.propTypes = {
  img: PropTypes.string,
  discount: PropTypes.number,
  productDescription: PropTypes.string,
  weight: PropTypes.string,
  funcBtn: PropTypes.func,
};

CardSelectedProduct.defaultProps = {
  img: '',
  discount: 353,
  productDescription:
    'Влажный корм для кошек Гурмэ Натуральные рецепты, с курицей и морковью, 75 г x 26 шт',
  weight: '1,95',
  funcBtn: () => {},
};

export default CardSelectedProduct;
