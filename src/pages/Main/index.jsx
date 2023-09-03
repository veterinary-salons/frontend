import classes from './Main.module.scss';
import SpecialistCardList from '../../modules/mainPage/specialistCardList/SpecialistCardList';
import ServiceCardList from '../../modules/mainPage/serviceCardList/ServiceCardList';
import Facts from '../../modules/mainPage/facts/Facts';
import Button from '../../ui/buttons/originButton/Button';

function Main() {
  return (
    <main className={classes.main}>
      <section className={classes.promo}>
        <h1 className={classes.promo__title}>Ваш питомец — наша забота</h1>
        <p className={classes.promo__text}>
          Purrfect care&nbsp;&mdash; сервис подбора специалистов для ухода,
          присмотра, лечения и&nbsp;воспитания ваших питомцев
        </p>
        <Button>Найти специалиста</Button>
      </section>
      <div className={classes.main__gap} />
      <SpecialistCardList />
      <Facts />
      <ServiceCardList />
    </main>
  );
}

export default Main;
