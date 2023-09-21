import { Link, Outlet, useLocation } from 'react-router-dom';
// Link, добавить выше для теста компонента
import classNames from 'classnames';
import classes from './style.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BreadCrumbs from '../../modules/breadCrumbs';

import Button from '../../ui/buttons/originButton/Button';

//  TODO: Роуты при которых не должны отображаться крошки, добавлять по мере разработки, потом вынести в отдельный файл
const dataPathWithoutCrumbs = [
  '/',
  '/signin',
  '/signup',
  '/recovery',
  '/signup',
  '/advert-description',
];
const dataPathWithOnlyLogoHeader = ['/signin', '/recovery', '/signup'];
const dataPathWithoutFooter = [
  '/signin',
  '/recovery',
  '/signup',
  '/advert-description',
];

function Root() {
  const auth = localStorage.getItem('auth');
  const location = useLocation();
  const crumbsPath = dataPathWithoutCrumbs.includes(location.pathname);
  const isOnlyLogoHeader = dataPathWithOnlyLogoHeader.includes(
    location.pathname,
  );
  const isRenderFooter = dataPathWithoutFooter.includes(location.pathname);

  return (
    <div className={classes.root}>
      <Header authorization={auth} onlyLogo={isOnlyLogoHeader} />
      <main
        className={classNames(
          classes.main,
          location.pathname !== '/' ? classes.padding100 : null,
        )}
      >
        {!crumbsPath ? <BreadCrumbs className={classes.mt40} /> : null}
        <Outlet />
      </main>

      {location.pathname === '/' ? (
        <Link to="/test" style={{ margin: '50px', flex: '0 0 auto' }}>
          <Button size="large">Страница с тестовым компонентом</Button>
        </Link>
      ) : null}

      {!isRenderFooter ? <Footer /> : null}
    </div>
  );
}

export default Root;
