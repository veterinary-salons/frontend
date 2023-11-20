import PropTypes from 'prop-types';
import classNames from 'classnames';
import SpecialistsCard from '../../components/SpecialistsCard';
import NotificationMessage from '../../components/NotificationMessage/index';
import classes from './style.module.scss';

const SelectedServices = ({ dataServices }) =>
dataServices.length === 0 ? (
    <div className={classes['selected-services']}>
      <NotificationMessage
        imageNumber="10"
        title="Тут пусто как в&nbsp;миске этого&nbsp;котика"
        text="Неужели вы&nbsp;ещё не&nbsp;видели как много y&nbsp;нас 
        полезного и&nbsp;интересного?"
        to="/services"
        buttonText="Выбрать услугу"
      />
    </div>
  ) : (
    <ul className={classNames(
      classes['selected-services'],
      classes['selected-services__cards']
    )}>
      {dataServices.map(
        ({
          id,
          profession,
          price,
          numReviews,
          workedWith,
          description,
          name,
          scoreReview,
        }) => (
          <SpecialistsCard
            key={id}
            profession={profession}
            price={price}
            numReviews={numReviews}
            workedWith={workedWith}
            description={description}
            name={name}
            scoreReview={scoreReview}
          />
        ),
      )}
    </ul>
  );

  SelectedServices.propTypes = {
    dataServices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      profession: PropTypes.string,
      price: PropTypes.string,
      workedWith: PropTypes.string,
      description: PropTypes.string,
      name: PropTypes.string,
      numReviews: PropTypes.number,
      scoreReview: PropTypes.string,
    }),
  ),
};

SelectedServices.defaultProps = {
  dataServices: [],
};

export default SelectedServices;
