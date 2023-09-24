import { Link } from 'react-router-dom';
import classes from './Main.module.scss';
// import SpecialistCardList from '../../modules/mainPage/specialistCardList/index';
import ServicesList from '../ServicesList';
import GoodsCardMainPageList from '../../modules/mainPage/goodsCardList/index';
import Facts from '../../modules/mainPage/facts/Facts';
import Button from '../../ui/buttons/originButton/Button';

function Main() {
  return (
    <>
      <section className={classes.promo}>
        <h1 className={classes.promo__title}>Ваш питомец — наша забота</h1>
        <p className={classes.promo__text}>
          Purrfect care&nbsp;&mdash; сервис подбора специалистов для ухода,
          присмотра, лечения и&nbsp;воспитания ваших питомцев
        </p>
        <Link to="/services">
          <Button>Найти специалиста</Button>
        </Link>
      </section>
      <section className={classes.specialists}>
      <h2 className={classes.specialists__title}>Они любят и знают своё дело</h2>
      <ServicesList />
      </section>
      <Facts />
      <GoodsCardMainPageList />
    </>
  );
}

export default Main;
