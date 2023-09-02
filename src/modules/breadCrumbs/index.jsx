import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import LinkCrumb from './linkCrumb';
import classes from './style.module.scss';

import { breadcrumbNameMap } from '../../assets/constants/dataPath';

const BreadCrumbs = ({ className }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const createCrumbs = pathnames.map((_value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    return <LinkCrumb to={to} key={to} title={breadcrumbNameMap[to]} />;
  });

  return (
    <ol className={classNames(className, classes['bread-crumbs'])}>
      <LinkCrumb start title="Главная" />
      {createCrumbs}
    </ol>
  );
};

BreadCrumbs.defaultProps = {
  className: '',
};

BreadCrumbs.propTypes = {
  className: PropTypes.string,
};

export default BreadCrumbs;
