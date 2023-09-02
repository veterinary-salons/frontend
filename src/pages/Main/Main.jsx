import classes from './Main.module.scss';
import SpecialistCardList from '../../modules/mainPage/cardList/SpecialistCardList';

function Main() {
  return (
    <main className={classes.main}>
      <section className={classes.promo}>
        <h1 className={classes.promo__title}>Ваш питомец — наша забота</h1>
        <p className={classes.promo__text}>
          Purrfect care - сервис подбора специалистов для ухода, присмотра,
          лечения и воспитания ваших питомцев
        </p>
        <button className={classes.promo__button}>Найти специалиста</button>
      </section>
      <SpecialistCardList />
      <section className={classes.facts}>
        <h2 className={classes.facts__title}>
          Наша статистика поможет вам не переживать за своих любимцев
        </h2>
        <div className={classes.facts__wrap}>
          <div className={classes.facts__cat} />
          <ul className={classes.facts__table}>
            <li className={classes.facts__cell}>
              <h3 className={classes.facts__heading}>131</h3>
              <p className={classes.facts__text}>
                кошка вернулась с передержки в отличном настроении
              </p>
            </li>

            <li className={classes.facts__cell}>
              <h3 className={classes.facts__heading}>28</h3>
              <p className={classes.facts__text}>
                кроликов и 1 хорёк остались довольны приёмом у ветеринара
              </p>
            </li>

            <li className={classes.facts__cell}>
              <h3 className={classes.facts__heading}>70</h3>
              <p className={classes.facts__text}>
                щенков сдали экзамен ОКД и теперь ведут себя лучше хоязев
              </p>
            </li>

            <li className={classes.facts__cell}>
              <h3 className={classes.facts__heading}>52</h3>
              <p className={classes.facts__text}>
                собаки порадовали своих хозяев шелковистой шерстью после
                груминга
              </p>
            </li>
          </ul>
        </div>
      </section>
      <h3>здесь будут карточки услуг</h3>
    </main>
  );
}

export default Main;
