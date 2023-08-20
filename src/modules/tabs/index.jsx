import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import Tab from './tab';
import classes from './styles.module.scss';

const Tabs = ({ dataLinks }) => {
  const { state } = useLocation();
  const gapGlider = state ? state.index : 0;
  const createTabs = dataLinks.map(({ pathname, title }, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Tab key={i} pathname={pathname} i={i}>
      {title}
    </Tab>
  ));
  return (
    <>
      <nav className={classes.nav}>
        {createTabs}
        <div
          className={classes.glider}
          style={{ transform: `translateX(${gapGlider * 100}%)` }}
        />
      </nav>
      <Outlet />
    </>
  );
};

Tabs.propTypes = {
  dataLinks: PropTypes.arrayOf(
    PropTypes.shape({ pathname: PropTypes.string, title: PropTypes.string }),
  ).isRequired,
};

export default Tabs;
