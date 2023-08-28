import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import BreadCrumbs from '../../modules/breabCrumbs';

// Роуты при которых не должны отображаться крошки, добавлять по мере разработки, потом вынести в отдельный файл
const dataPathCrumbs = ['/'];

function Root() {
  const location = useLocation();
  const crumbsPath = dataPathCrumbs.includes(location.pathname);

  return (
    <div className="root">
      <h1>Здесь будет Header</h1>
      {!crumbsPath ? <BreadCrumbs /> : null}
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
