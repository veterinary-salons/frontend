import classes from './style.module.scss';
import GoodsCardMainPage from '../goodsCard/index';
import toysImg from '../../../assets/images/images/services-card/toys.png';
import foodImg from '../../../assets/images/images/services-card/food.png';
import treatsImg from '../../../assets/images/images/services-card/treats.png';
import pillsImg from '../../../assets/images/images/services-card/pills.png';

const GoodsCardListMainPage = () => (
  <section className={classes.goods}>
    <h2 className={classes.goods__title}>Товары для питомцев</h2>
    <ul className={classes.goods__cards}>
      <GoodsCardMainPage color="blue" title="Игрушки" img={toysImg} link='/goods'/>
      <GoodsCardMainPage title="Корм" color="violet" img={foodImg} link='/goods'/>
      <GoodsCardMainPage color="green" title="Вкусняшки" img={treatsImg} link='/goods'/>
      <GoodsCardMainPage color="yellow" title="Лекарства" img={pillsImg} link='/goods'/>
    </ul>
  </section>
);

export default GoodsCardListMainPage;
