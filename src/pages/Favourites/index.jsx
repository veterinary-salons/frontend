import classes from './style.module.scss';
import Tabs from '../../modules/tabs';
import { dataLinksFavourites } from '../../assets/constants/dataPath';

const Favourites = () => (
  <>
    <h3 className={classes.favourites__title}>Избранное</h3>
    <Tabs dataLinks={dataLinksFavourites} marginT />
  </>
);

export default Favourites;
