import { useLocation } from 'react-router-dom';
import LinkCrumb from './linkCrumb';
import classes from './style.module.scss';

const breadcrumbNameMap = {
  '/1': 'Первая',
  '/1/2': 'Вторая',
  '/3': 'Третья',
};

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const createCrumbs = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    return <LinkCrumb to={to} key={to} title={breadcrumbNameMap[to]} />;
  });

  return (
    <ol className={classes['bread-crumbs']}>
      <LinkCrumb start title="Главная" />
      {createCrumbs}
    </ol>
  );
};

export default BreadCrumbs;
