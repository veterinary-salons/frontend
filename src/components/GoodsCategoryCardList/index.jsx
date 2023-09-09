import classes from './style.module.scss';
import GoodsCategoryCard from '../GoodsCategoryCard';
import { filterData } from '../../assets/constants/filters';

const GoodsCategoryCardList = () => {
  const goodsCatList = filterData.Categories.options;

  return(
  <ul className={classes.goods}>
    {goodsCatList.map((item) => (
      <GoodsCategoryCard
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