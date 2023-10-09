// import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './style.module.scss';
import Button from '../../ui/buttons/originButton/Button';

const ProfileServiceCard = () => (
  <article className={classes.card}>
    <h4 className={classes.card__title}>Ветеринарный врач</h4>
    <div className={classes.card__block}>
      <h5 className={classes['card__block-title']}>Только</h5>
      <ul className={classes['card__block-items']}>
        <li className={classes['card__block-item']}>Кошки</li>
        <li className={classes['card__block-item']}>Собаки</li>
      </ul>
    </div>
    <div className={classes['card__block-wrapper']}>
      <div className={classes.card__block}>
        <h5 className={classes['card__block-title']}>Услуги</h5>
        <ul className={classes['card__block-items']}>
          <li className={classes['card__block-item']}>Консультация</li>
          <li className={classes['card__block-item']}>Вакцинация</li>
        </ul>
      </div>
      <div className={classes.card__block}>
        <h5
          className={classNames(classes['card__block-title'], classes.textAR)}
        >
          Цена
        </h5>
        <ul className={classes['card__block-items']}>
          <li
            className={classNames(classes['card__block-item'], classes.textAR)}
          >
            2000 ₽/усл.
          </li>
          <li
            className={classNames(classes['card__block-item'], classes.textAR)}
          >
            500 ₽/усл.
          </li>
        </ul>
      </div>
    </div>
    <div className={classes.card__block}>
      <h5 className={classes['card__block-title']}>Расписание</h5>
      <ul
        className={classNames(
          classes['card__block-items'],
          classes['card__block-items_row'],
        )}
      >
        <li
          className={classNames(
            classes['card__block-item'],
            classes['card__block-item_schedule'],
          )}
        >
          Пн — Пт
          <br />
          9:00 - 14:00
        </li>
        <li
          className={classNames(
            classes['card__block-item'],
            classes['card__block-item_schedule'],
          )}
        >
          Чт
          <br />
          выходной
        </li>
        <li
          className={classNames(
            classes['card__block-item'],
            classes['card__block-item_schedule'],
          )}
        >
          Вс
          <br />
          круглосуточно
        </li>
      </ul>
      <p className={classNames(classes.card__descr, classes.card__descr_fz12)}>
        Каждый день - перерыв 12:00 - 13:00.
      </p>
    </div>
    <p className={classNames(classes.card__descr, classes.card__descr_pt)}>
      Благодаря многолетнему опыту работы с домашними животными, глубокому
      знанию рынка услуг и уровню оказания медицинской помощи, я смог(ла)
      подняться на новую ступень в работе с животными. Мой опыт позволил(а) мне
      разработать собственный подход к диагностике и методам лечения.
    </p>
    <div className={classes['card__button-wrapper']}>
      <Button size="medium" isMaxWidth>
        Внести изменения
      </Button>
      <Button size="medium" variant="outlined" isMaxWidth>
        Cнять с публикации
      </Button>
    </div>
  </article>
);

export default ProfileServiceCard;
