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
  '/signin-no-account',
  '/signin-with-account',
  '/signup',
  '/successful-signup',
  '/recovery',
  '/recovery-code',
  '/recovery-password',
  '/successful-recovery',
  '/advert-description',
  '/advert-schedule',
  '/advert-final',
  '/advert-success',
  '/advert',
  '/advert-groomer',
  '/advert-veterinary',
  '/advert-petSitting',
  '/advert-cynology',
  '/advert-cynology-pet',
  '/advert-cynology-services',
  '/advert-groomer-pet',
  '/advert-groomer-services',
  '/advert-veterinary-pet',
  '/advert-price',
  '/advert-veterinary-services',
  '/advert-petSitting-pet',
  '/advert-image',
  '/test'
];
const dataPathWithOnlyLogoHeader = [
  '/signin',
  '/signin-no-account',
  '/signin-with-account',
  '/signup',
  '/recovery',
  '/recovery-code',
  '/recovery-password',
  '/successful-recovery',
];
const dataPathWithoutFooter = [
  '/signin-no-account',
  '/signin-with-account',
  '/signin',
  '/recovery',
  '/signup',
  '/advert-final',
  '/recovery',
  '/recovery-code',
  '/recovery-password',
  '/advert-price',
  '/signin',
  '/successful-recovery',
  '/advert-description',
  '/advert-schedule',
  '/advert',
  '/advert-groomer',
  '/advert-veterinary',
  '/advert-petSitting',
  '/advert-cynology',
  '/advert-cynology-pet',
  '/advert-cynology-services',
  '/advert-groomer-pet',
  '/advert-groomer-services',
  '/advert-veterinary-pet',
  '/advert-veterinary-services',
  '/advert-petSitting-pet',
  '/advert-image'
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
          location.pathname !== '/' ? classes['main-with-margins'] : null,
        )}
      >
        {!crumbsPath ? <BreadCrumbs className={classes.mt40} /> : null}
        <Outlet />
      </main>

      {/* Чтобы включить кнопку тестового компонента, нужно сделать location.pathname === '/' */}
      {location.pathname === '///' ? (
        <Link to="/test" style={{ margin: '50px', flex: '0 0 auto' }}>
          <Button size="large">Страница с тестовым компонентом</Button>
        </Link>
      ) : null}

      {!isRenderFooter ? <Footer /> : null}
    </div>
  );
}

export default Root;
