import SectionTitle from '../../components/SectionTitle';
import Tabs from '../../modules/tabs';
import { dataLinksFavourites } from '../../assets/constants/dataPath';

const Favourites = () => (
  <section>
    <SectionTitle title='Избранное' withFilter/>
    <Tabs dataLinks={dataLinksFavourites} marginT />
  </section>
);

export default Favourites;
