import style from './Main.module.scss';
import Header from '../Header';
import SpecialistCardList from '../../modules/main-page/cardList/SpecialistCardList';
import Footer from '../Footer';

function Main() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <section className={style.promo}>
          <h1 className={style.promo__title}>Ваш питомец — наша забота</h1>
          <p className={style.promo__text}>
            Purrfect care - сервис подбора специалистов для ухода, присмотра,
            лечения и воспитания ваших питомцев
          </p>
          <button className={style.promo__button}>Найти специалиста</button>
        </section>
        <section className={style.specialists}>
          <h2 className={style.specialists__title}>
            Они любят и знают своё дело
          </h2>
          <SpecialistCardList />
        </section>
        <section className={style.facts}>
          <h2 className={style.facts__title}>
            Наша статистика поможет вам не переживать за своих любимцев
          </h2>
          <div className={style.facts__wrap}>
            <div className={style.facts__cat} />
            <ul className={style.facts__table}>
              <li className={style.facts__cell}>
                <h3 className={style.facts__heading}>131</h3>
                <p className={style.facts__text}>
                  кошка вернулась с передержки в отличном настроении
                </p>
              </li>

              <li className={style.facts__cell}>
                <h3 className={style.facts__heading}>28</h3>
                <p className={style.facts__text}>
                  кроликов и 1 хорёк остались довольны приёмом у ветеринара
                </p>
              </li>

              <li className={style.facts__cell}>
                <h3 className={style.facts__heading}>70</h3>
                <p className={style.facts__text}>
                  щенков сдали экзамен ОКД и теперь ведут себя лучше хоязев
                </p>
              </li>

              <li className={style.facts__cell}>
                <h3 className={style.facts__heading}>52</h3>
                <p className={style.facts__text}>
                  собаки порадовали своих хозяев шелковистой шерстью после
                  груминга
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className={style.services}>
          <h2 className={style.services__title}>Товары для питомцев</h2>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
