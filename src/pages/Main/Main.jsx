import classes from './Main.module.scss';
import SpecialistCardList from '../../modules/mainPage/specialistCardList/SpecialistCardList';
import ServiceCardList from '../../modules/mainPage/serviceCardList/ServiceCardList';

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
      <h2>Здесь будут кот с фактами</h2>
      <ServiceCardList />
    </main>
  ); 
}

export default Main;
