import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import classes from './style.module.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BreadCrumbs from '../../modules/breadCrumbs';

// Роуты при которых не должны отображаться крошки, добавлять по мере разработки, потом вынести в отдельный файл
const dataPathWithoutCrumbs = ['/'];

function Root() {
  const location = useLocation();
  const crumbsPath = dataPathWithoutCrumbs.includes(location.pathname);

  return (
    <div className={classes.root}>
      <Header authorization />
      <main
        className={classNames(
          classes.main,
          location.pathname !== '/' ? classes.padding100 : null,
        )}
      >
        {!crumbsPath ? <BreadCrumbs className={classes.mt40} /> : null}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
