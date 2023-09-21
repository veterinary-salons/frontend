import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom/dist';
import classes from './style.module.scss';
import SectionTitle from '../../components/SectionTitle';

const arrWithoutFilters = ['/services', '/goods'];

const Catalog = ({ title }) => {
  const location = useLocation();
  const isWithFilter = arrWithoutFilters.includes(location.pathname);

  return (
    <section className={classes.catalog}>
      <SectionTitle title={title} withFilter={!isWithFilter} />
      <Outlet />
    </section>
  );
};

Catalog.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Catalog;
