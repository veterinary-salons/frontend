import SectionHeader from '../../components/SectionHeader';
import Tabs from '../../modules/tabs';
import { dataLinksFavourites } from '../../assets/constants/dataPath';

const Favourites = () => (
  <>
    <SectionHeader title='Избранное' />
    <Tabs dataLinks={dataLinksFavourites} marginT />
  </>
);

export default Favourites;
