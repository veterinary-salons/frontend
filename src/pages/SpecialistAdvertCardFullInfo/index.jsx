// Страница карточки специалиста
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { professionals } from '../../assets/constants/temporaryData';
import classes from './style.module.scss';
import SectionSubtitle from '../../components/SectionSubtitle';
import SpecialistAdvertCardServices from '../../components/SpecialistAdvertCardServices';
import CardReview from '../../components/CardReview';
import Button from '../../ui/buttons/originButton/Button';

const SpecialistAdvertCardFullInfo = () => {
  const { id } = useParams();

  const specialistInfo = professionals.find((item) => item.id === id);

  // Initialize state to keep track of the number of reviews to display
  const [numReviewsToDisplay, setNumReviewsToDisplay] = useState(2);

  // Function to load more reviews when the button is clicked
  const loadMoreReviews = () => {
    if (numReviewsToDisplay + 2 <= specialistInfo.numReviews) {
      setNumReviewsToDisplay(numReviewsToDisplay + 2); // Increase by 2, but not beyond the total number of reviews
    } else {
      setNumReviewsToDisplay(specialistInfo.numReviews); // Display the remaining reviews
    }
  };

  // TODO: использовать, когда появится массив отзывов
  // const reviewComponents = specialistInfo.reviews
  //   .slice(0, numReviewsToDisplay) // Display only the specified number of reviews
  //   .map((review, index) => (
  //     <CardReview key={index} />
  //   ));

  const reviewComponents = Array.from(
    { length: numReviewsToDisplay },
    (_, index) => <CardReview key={index} />,
  );

  return (
    <>
      <SpecialistAdvertCardServices SpecialistData={specialistInfo} />
      <SectionSubtitle title="Расписание" />
      <div className={classes['advert-card__schedule']}>
        {specialistInfo.schedule.map((day) => (
          <label
            className={classes['advert-card__schedule-label']}
            key={day.day}
          >
            <p>{day.day}</p>
            <p>
              {day.time.start !== 'круглосуточно' &&
              day.time.start !== 'выходной'
                ? `${day.time.start} - ${day.time.end}`
                : day.time.start}
            </p>{' '}
          </label>
        ))}
      </div>
      <SectionSubtitle title={`Отзывы (${specialistInfo.numReviews})`} />
      {reviewComponents}
      {numReviewsToDisplay < specialistInfo.numReviews && (
        <Button variant="outlined" size="medium" onClick={loadMoreReviews}>
          Показать ещё
        </Button>
      )}
    </>
  );
};

export default SpecialistAdvertCardFullInfo;
