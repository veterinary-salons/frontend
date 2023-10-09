import classes from './Facts.module.scss';

const Facts = () => (
  <section className={classes.facts}>
    <div className={classes.facts__content}>
      <h2 className={classes.facts__title}>
        Наша статистика поможет вам не переживать за своих любимцев
      </h2>
      <div className={classes.facts__wrap}>
        <div className={classes.facts__cat} />
        <ul className={classes.facts__table}>
          <li className={classes.facts__cell}>
            <h3
              className={`${classes.facts__heading} ${classes.facts__heading_yellow}`}
            >
              131
            </h3>
            <p className={classes.facts__text}>
              кошка вернулась с&nbsp;передержки в&nbsp;отличном настроении
            </p>
          </li>
          <li className={classes.facts__cell}>
            <h3
              className={`${classes.facts__heading} ${classes.facts__heading_green}`}
            >
              28
            </h3>
            <p className={classes.facts__text}>
              кроликов и&nbsp;1&nbsp;хорёк остались довольны приёмом
              у&nbsp;ветеринара
            </p>
          </li>
          <li className={classes.facts__cell}>
            <h3
              className={`${classes.facts__heading} ${classes.facts__heading_violet}`}
            >
              70
            </h3>
            <p className={classes.facts__text}>
              щенков сдали экзамен ОКД и&nbsp;теперь ведут себя лучше хоязев
            </p>
          </li>
          <li className={classes.facts__cell}>
            <h3
              className={`${classes.facts__heading} ${classes.facts__heading_orange}`}
            >
              52
            </h3>
            <p className={classes.facts__text}>
              собаки порадовали своих хозяев шелковистой шерстью после груминга
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Facts;
