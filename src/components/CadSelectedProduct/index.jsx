import PropTypes from 'prop-types';
import classnames from 'classnames';
import Checkbox from '../../ui/forms/checkboxes/checkbox/checkbox';
import CartProductQuantityBox from '../../ui/buttons/cartProductQuantityBox';
import Button from '../../ui/buttons/originButton/Button';
import classes from './style.module.scss';
import defaltImg from '../../assets/images/icon/paw/icon-paw.svg';

const CadSelectedProduct = ({ img }) => (
  <article className={classes.card}>
    <Checkbox type="checkbox" htmlType="checkbox" value="" />
    <img
      className={classes.card__img}
      src={img || defaltImg}
      alt="фото продукта"
    />
    <div className={classes['card__container-info']}>
      <p className={classes.card__text}>
        Влажный корм для кошек Гурмэ Натуральные рецепты, с курицей и морковью,
        75 г x 26 шт
      </p>
      <p className={classnames(classes.card__text, classes.card__text_grey)}>
        1,95 кг
      </p>
      <CartProductQuantityBox />
    </div>

    <di className={classes['card__container-price']}>
      <h4 className={classes.card__text_price}>{`${353} ₽/шт`}</h4>
      <Button
        size="small"
        variant="outlined"
        onClick={() => {}}
        isMaxWidth="true"
      >
        Удалить
      </Button>
    </di>
  </article>
);

CadSelectedProduct.propTypes = {
  img: PropTypes.string,
};

CadSelectedProduct.defaultProps = {
  img: '',
};

export default CadSelectedProduct;
