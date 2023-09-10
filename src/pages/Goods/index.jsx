import { useParams } from 'react-router-dom';
import classes from './style.module.scss';
import GoodsFilter from '../../components/Filters/GoodsFilter';
import CardGood from '../../components/CardGood';
import { dataGoodsForCatalog } from '../../assets/constants/temporaryData';

const Goods = () => {
  const params = useParams();
  const filteredCards = dataGoodsForCatalog.filter(
    (item) => item.category === params.category,
  );

  return (
    <div className={classes.goods}>
      <GoodsFilter category={params.category} />
      <ul className={classes.goods__cards}>
        {filteredCards.map((i) => (
          <li key={i.id}>
            <CardGood {...i} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goods;
