import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import Tab from './tab';
import classes from './styles.module.scss';

const Tabs = ({ dataLinks, style, marginT }) => {
  const createTabs = dataLinks.map(({ pathname, title }, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Tab key={i} pathname={pathname} i={i}>
      {title}
    </Tab>
  ));
  return (
    <>
      <nav
        className={classNames(classes.nav, marginT ? classes.marginT : null)}
        style={style}
      >
        {createTabs}
      </nav>
      <Outlet />
    </>
  );
};

Tabs.defaultProps = {
  style: null,
  marginT: false,
};

Tabs.propTypes = {
  dataLinks: PropTypes.arrayOf(
    PropTypes.shape({ pathname: PropTypes.string, title: PropTypes.string }),
  ).isRequired,
  style: PropTypes.shape({}),
  marginT: PropTypes.bool,
};

export default Tabs;
