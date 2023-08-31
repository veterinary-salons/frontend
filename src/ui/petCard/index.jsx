import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';

import Button from '../buttons/originButton/Button';

const PetCard = ({ src, title, age, months, add, onClick }) => {
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
          <Button onClick={onClick} shape="round" size="small" variant="add" />
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
          <button
            onClick={onClick}
            type="button"
            className={classes['pet-card__edit']}
            aria-label="изменить"
          />
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
};

PetCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  age: PropTypes.number,
  months: PropTypes.number,
  add: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default PetCard;
