import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

const ServiceBookingCard = ({
  type,
  status,
  subjectImage,
  subjectName,
  serviceName,
  serviceDate,
  price
}) => {
  const [statusData, setStatusData] = useState({});

  useEffect(() => {
    if (type === 'forMe') {
      if (status === 'inProgress') {
        setStatusData({
          title: '',
          subjectSubtitle: 'Исполнитель',
          dateSubtitle: 'Дата исполнения',
          buttonText: 'Отменить услугу',
          buttonLink: '/',
          cardLink: '/'
        })
      }
      if (status === 'done') {
        setStatusData({
          title: 'Исполнено',
          subjectSubtitle: 'Исполнитель',
          dateSubtitle: 'Дата исполнения',
          buttonText: 'Оценить услугу',
          buttonLink: '/',
          cardLink: '/'
        })
      }
      if (status === 'canceled') {
        setStatusData({
          title: 'Отменено',
          subjectSubtitle: 'Исполнитель',
          dateSubtitle: 'Дата отмены',
          buttonText: 'Оценить услугу',
          buttonLink: '/',
          cardLink: '/'
        })
      }
    }
    if (type === 'fromMe') {
      if (status === 'inProgress') {
        setStatusData({
          title: '',
          subjectSubtitle: 'Заказчик',
          dateSubtitle: 'Дата исполнения',
          buttonText: 'Отменить бронирование',
          buttonLink: '/',
          cardLink: '/'
        })
      }
      if (status === 'done') {
        setStatusData({
          title: 'Исполнено',
          subjectSubtitle: 'Заказчик',
          dateSubtitle: 'Дата исполнения',
          buttonText: 'Посмотреть отзыв',
          buttonLink: '/',
          cardLink: '/'
        })
      }
      if (status === 'canceled') {
        setStatusData({
          title: 'Отменено',
          subjectSubtitle: 'Заказчик',
          dateSubtitle: 'Дата отмены',
          buttonText: 'Посмотреть отзыв',
          buttonLink: '/',
          cardLink: '/'
        })
      }
    }
  }, []);

  const getClassTitle = classnames(
    classes.card__title,
    {
      [classes.card__title_green]: status === 'done',
    },
    {
      [classes.card__title_red]: status === 'canceled',
    },
  );

  return (
    <article className={classes.card}>
      {status !== 'inProgress' &&
        <h3 className={getClassTitle}>{statusData.title}</h3>
      }

      <div className={classes.card__subject}>
        {subjectImage === undefined ?
          <div className={classes['card__default-img']}/>
        :
          <img
            src={subjectImage}
            alt="Аватар"
            className={classes.card__img}
          />
        }
        <div className={classes.card__container}>
          <p className={(classes.card__text, classes.card__text_color)}>
            {statusData.subjectSubtitle}
          </p>
          <p className={classes.card__text}>{subjectName}</p>
        </div>
      </div>
      
      <div className={classes.card__container}>
        <p
          className={(classes.card__text, classes.card__text_color)}
        >Вид услуги</p>
        <p className={classes.card__text}>{serviceName}</p>
      </div>

      <div className={classes.card__container}>
        <p className={(classes.card__text, classes.card__text_color)}>
          {statusData.dateSubtitle}
        </p>
        <p className={classes.card__text}>
          {serviceDate}
        </p>
      </div>

      <div className={classes.card__container}>
        <p className={(classes.card__text, classes.card__text_color)}>
          Сумма
        </p>
        <p className={classes.card__text}>{`${price} ₽`}</p>
      </div>

      <Button
        variant="outlined"
        size="medium"
        type="button"
        isMaxWidth
        onClick={() => {}}
        active={status !== 'canceled'}
      >
        {statusData.buttonText}
      </Button>
    </article>
  );
};
/**
 * скорее всего типы придется переделывать,
 * т.к. мы не знаем какие данные буду приходить с бэка
 */
ServiceBookingCard.propTypes = {
  subjectImage: PropTypes.string,
  subjectName: PropTypes.string,
  type: PropTypes.oneOf(['forMe', 'fromMe']).isRequired,
  status: PropTypes.oneOf(['inProgress', 'done', 'canceled']).isRequired,
  serviceName: PropTypes.string,
  serviceDate: PropTypes.string,
  price: PropTypes.string
};

ServiceBookingCard.defaultProps = {
  subjectImage: undefined,
  subjectName: 'Герасимова Алла',
  serviceName: 'Плановая прививка',
  serviceDate: '26.07.2023',
  price: '5 980'
};

export default ServiceBookingCard;
