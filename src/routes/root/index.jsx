import { Outlet } from 'react-router-dom';
import BreadCrumbs from '../../modules/breabCrumbs';

function Root() {
  return (
    <>
      <BreadCrumbs />
      <Outlet />
    </>
  );
}

export default Root;
