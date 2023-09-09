import { useState } from 'react';
import classes from './style.module.scss';
import SectionTitle from '../../components/SectionTitle';
import GoodsCategoryCardList from '../../components/GoodsCategoryCardList'
import GoodsFilter from '../../components/Filters/GoodsFilter';
import CardGood from '../../components/CardGood';
import { dataGoodsForCatalog } from '../../assets/constants/temporaryData';

const Goods = () => {
  const [mainPage, setMainPage] = useState(true);
  console.log(mainPage, setMainPage)

  return (
    <section className={classes.goods}>
      <SectionTitle title='Товары' withFilter={!mainPage}/>
      {mainPage ?
        <div className={classes.goods__content}>
          <GoodsCategoryCardList/>
        </div>
      :
        <div className={classes.goods__content}>
          <GoodsFilter/>
          <ul className={classes.goods__cards}>
            {dataGoodsForCatalog.map((i) => (
              <li key={i.id}>
                <CardGood {...i} />
              </li>
            ))}
          </ul>
        </div>
      }
    </section>
  );
};

export default Goods;
