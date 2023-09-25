import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Tab from './tab';
import classes from './styles.module.scss';
import Button from '../../ui/buttons/originButton/Button';

const Tabs = ({ dataLinks, style, marginT }) => {
  const location = useLocation();
  const createTabs = dataLinks.map(({ pathname, title }, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Tab key={i} pathname={pathname} i={i}>
      {title}
    </Tab>
  ));

  const createHistoryButton = () =>
    location.pathname.includes('history') ? (
      <Link to="services">
        <Button size="medium" variant="outlined">
          Активные услуги
        </Button>
      </Link>
    ) : (
      <Link to="services/history">
        <Button size="medium" variant="outlined">
          История услуг
        </Button>
      </Link>
    );
  return (
    <>
      <div className={classes['wrapper-nav']}>
        <nav
          className={classNames(classes.nav, marginT ? classes.marginT : null)}
          style={style}
        >
          {createTabs}
        </nav>
        {location.pathname.includes('profile/services')
          ? createHistoryButton()
          : null}
      </div>

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
