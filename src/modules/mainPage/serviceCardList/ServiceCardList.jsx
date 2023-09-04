import classes from './ServiceCardList.module.scss';
import ServiceCard from '../serviceCard/ServiceCard';
import toysImg from '../../../assets/images/images/services-card/toys.png';
import foodImg from '../../../assets/images/images/services-card/food.png';
import treatsImg from '../../../assets/images/images/services-card/treats.png';
import pillsImg from '../../../assets/images/images/services-card/pills.png';

const SpecialistCardList = () => (
  <section className={classes.services}>
    <h2 className={classes.services__title}>Товары для питомцев</h2>
    <ul className={classes.services__cards}>
      <ServiceCard color="blue" title="Игрушки" img={toysImg} link='/goods'/>
      <ServiceCard title="Корм" color="violet" img={foodImg} link='/goods'/>
      <ServiceCard color="green" title="Вкусняшки" img={treatsImg} link='/goods'/>
      <ServiceCard color="yellow" title="Лекарства" img={pillsImg} link='/goods'/>
    </ul>
  </section>
);

export default SpecialistCardList;
