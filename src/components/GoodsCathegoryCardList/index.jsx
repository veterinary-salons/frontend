import classes from './style.module.scss';
import GoodsCathegoryCard from '../GoodsCathegoryCard';
import { filterData } from '../../assets/constants/filters';

const GoodsCathegoryCardList = () => {
  const goodsCatList = filterData.TypeForAll.options;

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

export default GoodsCathegoryCardList;