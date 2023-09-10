import classes from './style.module.scss';
import GoodsCathegoryCard from '../GoodsCategoryCard';
import { filterGoodsData } from '../../assets/constants/filters';

const GoodsCategoryCardList = () => {
  const goodsCatList = filterGoodsData.TypeForAll.options;

  return(
  <ul className={classes.goods}>
    {goodsCatList.map((item) => (
      <GoodsCathegoryCard
        key={item.value}
        link='/goods'
        title={item.label}
        img={item.img}
      />
    ))}
  </ul>
  )
};

export default GoodsCategoryCardList;