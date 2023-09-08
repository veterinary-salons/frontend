import classes from './style.module.scss'
import SectionTitle from '../../components/SectionTitle';
import Tabs from '../../modules/tabs';
import { dataLinksFavourites } from '../../assets/constants/dataPath';

const Favourites = () => (
  <section className={classes.favourites}>
    <SectionTitle title='Избранное'/>
    <Tabs dataLinks={dataLinksFavourites} marginT />
  </section>
);

export default Favourites;
