import PropTypes from 'prop-types';
import CardGood from '../../components/CardGood/index';
import NotificationMessage from '../../components/NotificationMessage/index';
import classes from './style.module.scss';

const SelectedProducts = ({ dataProducts }) => (
  <section className={classes['selected-products']}>
    {dataProducts.length === 0 ? (
      <NotificationMessage
        imageNumber="10"
        title="Тут пусто как в миске этого котика"
        text="Неужели вы ещё не видели как много у нас 
        полезного и интересного?"
        to="/goods"
        buttonText="Выбрать товары"
      />
    ) : (
      dataProducts.map((i) => <CardGood {...i} key={i.id} />)
    )}
  </section>
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