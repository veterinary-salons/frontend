// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom/dist';
import classes from './style.module.scss';
import ServicesFilterMain from '../../components/Filters/ServicesFilters/ServicesFilterMain';
import { professionals } from '../../assets/constants/temporaryData';
import SpecialistsCard from '../../components/specialistsCard';
import Button from '../../ui/buttons/originButton/Button';

const Service = () => {
  const params = useParams();
  const filteredCards = professionals.filter(
    (professional) => professional.specialist === params.service,
  );

  return (
    <div className={classes.services}>
      <ServicesFilterMain />
      <ul className={classes.services__list}>
      {filteredCards.map(
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
      <div className={classes.services__button}>
      <Button variant='outlined' size='medium'>Показать ещё</Button>
      </div>
      </ul>
    </div>
  );
};

export default Service;
