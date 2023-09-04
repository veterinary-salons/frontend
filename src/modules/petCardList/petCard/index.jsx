import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import classes from './style.module.scss';

import Button from '../../../ui/buttons/originButton/Button';

const PetCard = ({ src, title, age, months, add, id }) => {
  const unitAgeArr = ['год', 'года', 'лет'];
  const unitMonthsArr = ['месяц', 'месяца', 'месяцев'];

  const createUnit = (num, textArr) => {
    const m = Math.abs(num) % 100;
    const n1 = num % 10;
    if (m > 10 && m < 20) {
      return textArr[2];
    }
    if (n1 > 1 && n1 < 5) {
      return textArr[1];
    }
    if (n1 === 1) {
      return textArr[0];
    }
    return textArr[2];
  };

  const unitAge = createUnit(age, unitAgeArr);
  const unitMonths = createUnit(months, unitMonthsArr);
  const createAgeWithText = age ? `${age} ${unitAge}` : null;
  const createMonthsWithText = months ? `${months} ${unitMonths}` : null;
  const createSubtitle = age
    ? `${createAgeWithText} ${months} мес`
    : createMonthsWithText;

  return (
    <div className={classNames(classes['pet-card'], add ? classes.add : null)}>
      {add ? (
        <>
          <Link to="addpet">
            <Button shape="round" size="small" variant="add" />
          </Link>
          <p className={classes.add__title}>Добавить питомца</p>
        </>
      ) : (
        <>
          {src ? (
            <img
              className={classes['pet-card__image']}
              src={src}
              alt={`тут должно быть фото ${title}, но оно не загрузилось`}
            />
          ) : null}
          <Link to={id} className={classes['pet-card__edit']} />
          <div className={classes['pet-card__content-wrapper']}>
            <p className={classes['pet-card__title']}>{title}</p>
            <p className={classes['pet-card__subtitle']}>{createSubtitle}</p>
          </div>
        </>
      )}
    </div>
  );
};

PetCard.defaultProps = {
  src: null,
  title: 'Чарли',
  age: 4,
  months: 5,
  add: false,
  id: null,
};

PetCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  age: PropTypes.number,
  months: PropTypes.number,
  add: PropTypes.bool,
  id: PropTypes.string,
};

export default PetCard;
