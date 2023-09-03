import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CardGood from '../../components/CardGood/index';
import NotificationMessage from '../../components/NotificationMessage/index';
import classes from './style.module.scss';

const SelectedProducts = ({ dataCrds }) => {
  const navigate = useNavigate();

  const handleNvigate = () => {
    navigate('/goods', { relative: 'path' });
  };

  return (
    <section className={classes['selected-products']}>
      {dataCrds ? (
        dataCrds.map((i) => <CardGood {...i} key={i.id} />)
      ) : (
        <NotificationMessage
          imageNumber="10"
          title="Тут пусто как в миске этого котика"
          text="Неужели вы ещё не видели как много у нас 
    полезного и интересного?"
          onClick={handleNvigate}
          buttonText="Выбрать товары"
        />
      )}
    </section>
  );
};

SelectedProducts.propTypes = {
  dataCrds: PropTypes.arrayOf(
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
  ).isRequired,
};

export default SelectedProducts;
