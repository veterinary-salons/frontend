import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom/dist';
import classes from './style.module.scss';
import SectionTitle from '../../components/SectionTitle';
import MobileFilterMenu from '../../components/MobileFilterMenu'

const arrWithoutFilters = ['/services', '/goods'];

const Catalog = ({ title }) => {
  const location = useLocation();
  const isWithFilter = arrWithoutFilters.includes(location.pathname);

  return (
    <section className={classes.catalog}>
      <SectionTitle title={title} withFilter={!isWithFilter} />
      <div className={classes.catalog__container}>
        <div className={classes.catalog__sorting} />
        <MobileFilterMenu />
      </div>
      <Outlet />
    </section>
  );
};

Catalog.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Catalog;
