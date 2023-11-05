import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import classes from './style.module.scss';
import Heart from '../../ui/buttons/heart/Heart';
import Button from '../../ui/buttons/originButton/Button';

// Основная информация о специалисте (категория, имя, с кем работает) + вариант кнопки "Забронировать услугу"
const SpecialistAdvertCardInfo = ({ SpecialistData }) => {
  const [isBookingPage, setIsBookingPage] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsBookingPage(true);
    navigate('service-booking');
  };

  const imgClasses = classNames(classes['card-info__img'], {
    [classes['card-info__img_small']]: isBookingPage,
  });

  useEffect(() => {
    // Проверяем, находимся ли мы на маршруте /services/{:service}/{:id}/service-booking
    if (location.pathname.startsWith('/services/') && location.pathname.endsWith('/service-booking')) {
      setIsBookingPage(true);
    }else{
      setIsBookingPage(false);
    }
  }, [location]);

  // eslint-disable-next-line no-unused-vars
  const img = '';

  return (
    <div className={classes['card-info']}>
      <div className={classes['card-info__container']}>
        <img
          className={imgClasses}
          src={`${
            SpecialistData.img === '' || !SpecialistData.img
              ? 'https://avatars.mds.yandex.net/i?id=2df3575db13ac51b990cca3baa3b9c985c0bb5ce-7758910-images-thumbs&n=13'
              : SpecialistData.img
          }`}
          alt="специалиста"
        />
        <div className={classes['card-info__container-info']}>
          <div className={classes['card-info__container-with-heart']}>
            <div className={classes['card-info__container-name']}>
              <p>{SpecialistData.profession}</p>
              <p>{SpecialistData.name}</p>
            </div>
            <Heart />
          </div>
          <div className={classes['card-info__container-work']}>
            <p>Работаю с {SpecialistData.workedWith}</p>
            {SpecialistData.isHomeVisit && (
              <p className={classes['card-info__home-visit']}>Выезд на дом</p>
            )}
          </div>
          {!isBookingPage && (
            <Button size="medium" onClick={handleButtonClick}>
              Забронировать услугу
            </Button>
          )}
        </div>
      </div>
      <p className={classes['card-info__description']}>
        {SpecialistData.description}
      </p>
    </div>
  );
};

SpecialistAdvertCardInfo.propTypes = {
  SpecialistData: PropTypes.shape({
    id: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    profession: PropTypes.string,
    price: PropTypes.string,
    workedWith: PropTypes.string,
    description: PropTypes.string,
    numReviews: PropTypes.number,
    scoreReview: PropTypes.string,
    specialist: PropTypes.string,
    isHomeVisit: PropTypes.bool,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.arrayOf(PropTypes.number),
      }),
    ),
    schedule: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        time: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            start: PropTypes.string,
            end: PropTypes.string,
          }),
        ]),
      }),
    ),
  }),
};

SpecialistAdvertCardInfo.defaultProps = {
  SpecialistData: {
    id: '2',
    img: 'https://vetandlife.ru/wp-content/uploads/2022/08/%D0%B3%D1%80%D1%83%D0%BC%D0%B5%D1%80-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0.jpg',
    name: 'Ирина',
    profession: 'Грумер на дом, стрижка, вычес',
    price: '2 500 ₽/усл',
    workedWith: 'собаками и кошками',
    description:
      'Предоставляю услуги груминга с выездом на дом. Шерсть вашего питомца всегда будет в отличном состоянии.',
    numReviews: 5,
    scoreReview: '4.9',
    specialist: 'groomer',
    isHomeVisit: true,
    services: [
      {
        title: 'Выставочный груминг',
        price: [1500, 5000],
      },
      {
        title: 'Гигиеничный груминг',
        price: [1000, 3000],
      },
    ],
    schedule: [
      {
        day: 'Пн',
        time: '10:00 - 16:00',
      },
      {
        day: 'Вт',
        time: 'круглосуточно',
      },
      {
        day: 'Ср',
        time: '10:00 - 16:00',
      },
      {
        day: 'Чт',
        time: 'выходной',
      },
      {
        day: 'Пт',
        time: '10:00 - 16:00',
      },
      {
        day: 'Сб',
        time: 'круглосуточно',
      },
      {
        day: 'Вс',
        time: '10:00 - 16:00',
      },
    ],
  },
};

export default SpecialistAdvertCardInfo;
