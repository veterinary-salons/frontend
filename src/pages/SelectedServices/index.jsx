import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import NotificationMessage from '../../components/NotificationMessage/index';
import classes from './style.module.scss';

const SelectedServices = ({ dataeArvices }) => {
  const navigate = useNavigate();

  const handleNvigate = () => {
    navigate('/services', { relative: 'path' });
  };

  return (
    <section className={classes['selected-services']}>
      {dataeArvices.length === 0 ? (
        <NotificationMessage
          imageNumber="10"
          title="Тут пусто как в миске этого котика"
          text="Неужели вы ещё не видели как много у нас 
полезного и интересного?"
          onClick={handleNvigate}
          buttonText="Выбрать услуги"
        />
      ) : (
        ''
      )}
    </section>
  );
};

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
