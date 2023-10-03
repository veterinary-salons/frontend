import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import LinkCrumb from './linkCrumb';
import classes from './style.module.scss';
import { breadcrumbNameMap } from '../../assets/constants/dataPath';

const BreadCrumbs = ({ className }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const articleTitle = useSelector((state) => state.articleTitle);
  const [crumbs, setCrumbs] = useState([]);

  const createCrumbs = pathnames.map((_value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    return breadcrumbNameMap[to] ? (
      <LinkCrumb to={to} key={to} title={breadcrumbNameMap[to]} />
    ) : null;
  });

  useEffect(() => {
    if (articleTitle) {
      createCrumbs.push(
        <LinkCrumb
          to={location.pathname}
          key={articleTitle}
          title={articleTitle}
        />,
      );
    }
    setCrumbs(createCrumbs);
  }, [articleTitle]);

  return (
    <ol className={classNames(className, classes['bread-crumbs'])}>
      <LinkCrumb start title="Главная" />
      {crumbs}
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
