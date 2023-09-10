import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom/dist';
import classes from './style.module.scss';
import SectionTitle from '../../components/SectionTitle';

const Catalog = ({ title }) => {
  const location = useLocation();

  return (
    <section className={classes.catalog}>
      <SectionTitle title={title} withFilter={location.pathname !== '/services'} />
      <Outlet />
    </section>
  );
};

Catalog.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Catalog;
