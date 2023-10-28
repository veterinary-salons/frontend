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
        
        <div className={classes.promo__content}>
          <h1 className={classes.promo__title}>Ваш питомец — наша забота</h1>
          <p className={classes.promo__text}>
            Purrfect care - сервис подбора специалистов для ухода,
            присмотра, лечения и&nbsp;воспитания ваших питомцев
          </p>
          <Link to="/services">
            <Button>Найти специалиста</Button>
          </Link>
          <div className={classes.promo__img} />
        </div>
      </section>
      <section className={classes.specialists}>
        <div className={classes.specialists__content}>
          <h2 className={classes.specialists__title}>
            Они любят и знают своё дело
          </h2>
          <ServicesList />
        </div>
      </section>
      <Facts />
      <GoodsCardMainPageList />
    </>
  );
}

export default Main;
