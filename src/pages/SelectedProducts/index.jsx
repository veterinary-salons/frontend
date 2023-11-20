import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardGood from '../../components/CardGood/index';
import NotificationMessage from '../../components/NotificationMessage/index';
import classes from './style.module.scss';

const SelectedProducts = ({ dataProducts }) =>
  dataProducts.length === 0 ? (
    <div className={classes['selected-products']}>
      <NotificationMessage
        imageNumber="10"
        title="Тут пусто как в миске этого котика"
        text="Неужели вы ещё не видели как много y нас 
        полезного и интересного?"
        to="/goods"
        buttonText="Выбрать товары"
      />
    </div>
  ) : (
    <ul className={classNames(
      classes['selected-products'],
      classes['selected-products__cards']
    )}>
      {dataProducts.map((i) => (
        <li className={classes['selected-products__card']} key={i.id}>
          <CardGood {...i} />
        </li>
      ))}
    </ul>
  );

SelectedProducts.propTypes = {
  dataProducts: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string,
      title: PropTypes.string,
      descriptionProduct: PropTypes.string,
      reviews: PropTypes.number,
      image: PropTypes.string,
      rating: PropTypes.string,
      counter: PropTypes.number,
      likes: PropTypes.bool,
    }),
  ),
};

SelectedProducts.defaultProps = {
  dataProducts: [],
};

export default SelectedProducts;
