import classes from './style.module.scss';
import GoodsCategoryCard from '../GoodsCategoryCard';
import { filterGoodsData } from '../../assets/constants/filters';

const GoodsCategoryCardList = () => {
  const goodsCatList = filterGoodsData.сategories.options;

  return (
    <ul className={classes.goods}>
      {goodsCatList.map((item) => (
        <GoodsCategoryCard
          key={item.value}
          link={item.value}
          title={item.label}
          img={item.img}
        />
      ))}
    </ul>
  );
};

export default GoodsCategoryCardList;
