import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Tab from './tab';
import classes from './styles.module.scss';

const Tabs = ({ dataLinks, style }) => {
  const createTabs = dataLinks.map(({ pathname, title }, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Tab key={i} pathname={pathname} i={i}>
      {title}
    </Tab>
  ));
  return (
    <>
      <nav className={classes.nav} style={style}>
        {createTabs}
      </nav>
      <Outlet />
    </>
  );
};

Tabs.defaultProps = {
  style: null,
};

Tabs.propTypes = {
  dataLinks: PropTypes.arrayOf(
    PropTypes.shape({ pathname: PropTypes.string, title: PropTypes.string }),
  ).isRequired,
  style: PropTypes.shape({}),
};

export default Tabs;
