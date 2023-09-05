import PropTypes from 'prop-types';
import NotificationMessage from '../../components/NotificationMessage/index';
import classes from './style.module.scss';

const SelectedServices = ({ dataeArvices }) => (
  <section className={classes['selected-services']}>
    {dataeArvices.length === 0 ? (
      <NotificationMessage
        imageNumber="10"
        title="Тут пусто как в миске этого котика"
        text="Неужели вы ещё не видели как много у нас 
        полезного и интересного?"
        to="/services"
        buttonText="Выбрать услуги"
      />
    ) : (
      ''
    )}
  </section>
);

SelectedServices.propTypes = {
  dataeArvices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      isActive: PropTypes.bool,
    }),
  ),
};

SelectedServices.defaultProps = {
  dataeArvices: [],
};

export default SelectedServices;
