import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

const statusDataMapping = [
  {
    type: 'forMe',
    status: 'inProgress',
    data: {
      title: '',
      subjectSubtitle: 'Исполнитель',
      dateSubtitle: 'Дата исполнения',
      buttonText: 'Отменить услугу',
      buttonLink: '/',
      cardLink: '/',
    },
  },
  {
    type: 'forMe',
    status: 'done',
    data: {
      title: 'Исполнено',
      subjectSubtitle: 'Исполнитель',
      dateSubtitle: 'Дата исполнения',
      buttonText: 'Оценить услугу',
      buttonLink: '/',
      cardLink: '/',
    },
  },
  {
    type: 'forMe',
    status: 'canceled',
    data: {
      title: 'Отменено',
      subjectSubtitle: 'Исполнитель',
      dateSubtitle: 'Дата отмены',
      buttonText: 'Оценить услугу',
      buttonLink: '/',
      cardLink: '/',
    },
  },
  {
    type: 'fromMe',
    status: 'inProgress',
    data: {
      title: '',
      subjectSubtitle: 'Заказчик',
      dateSubtitle: 'Дата исполнения',
      buttonText: 'Отменить бронирование',
      buttonLink: '/',
      cardLink: '/',
    },
  },
  {
    type: 'fromMe',
    status: 'done',
    data: {
      title: 'Исполнено',
      subjectSubtitle: 'Заказчик',
      dateSubtitle: 'Дата исполнения',
      buttonText: 'Посмотреть отзыв',
      buttonLink: '/',
      cardLink: '/',
    },
  },
  {
    type: 'fromMe',
    status: 'canceled',
    data: {
      title: 'Отменено',
      subjectSubtitle: 'Заказчик',
      dateSubtitle: 'Дата отмены',
      buttonText: 'Посмотреть отзыв',
      buttonLink: '/',
      cardLink: '/',
    },
  },
];

const ServiceBookingCard = ({
  type,
  status,
  subjectImage,
  subjectName,
  serviceName,
  serviceDate,
  price,
}) => {
  const [statusData, setStatusData] = useState({
    type: 'fromMe',
    status: 'canceled',
    data: {
      title: 'Отменено',
      subjectSubtitle: 'Заказчик',
      dateSubtitle: 'Дата отмены',
      buttonText: 'Посмотреть отзыв',
      buttonLink: '/',
      cardLink: '/',
    },
  },);

  useEffect(() => {
    setStatusData(
      statusDataMapping.find(
        (item) => item.type === type && item.status === status,
      ),
    );
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
      {status !== 'inProgress' && (
        <h3 className={getClassTitle}>{statusData.data.title}</h3>
      )}

      <div className={classes.card__subject}>
        {subjectImage === undefined ? (
          <div className={classes['card__default-img']} />
        ) : (
          <img src={subjectImage} alt="Аватар" className={classes.card__img} />
        )}
        <div className={classes.card__container}>
          <p className={(classes.card__text, classes.card__text_color)}>
            {statusData.data.subjectSubtitle}
          </p>
          <p className={classes.card__text}>{subjectName}</p>
        </div>
      </div>

      <div className={classes.card__container}>
        <p className={(classes.card__text, classes.card__text_color)}>
          Вид услуги
        </p>
        <p className={classes.card__text}>{serviceName}</p>
      </div>

      <div className={classes.card__container}>
        <p className={(classes.card__text, classes.card__text_color)}>
          {statusData.data.dateSubtitle}
        </p>
        <p className={classes.card__text}>{serviceDate}</p>
      </div>

      <div className={classes.card__container}>
        <p className={(classes.card__text, classes.card__text_color)}>Сумма</p>
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
        {statusData.data.buttonText}
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
  status: PropTypes.oneOf(['inProgress', 'done', 'cancelled']).isRequired,
  serviceName: PropTypes.string,
  serviceDate: PropTypes.string,
  price: PropTypes.string,
};

ServiceBookingCard.defaultProps = {
  subjectImage: undefined,
  subjectName: 'Герасимова Алла',
  serviceName: 'Плановая прививка',
  serviceDate: '26.07.2023',
  price: '5 980',
};

export default ServiceBookingCard;
