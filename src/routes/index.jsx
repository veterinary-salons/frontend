import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './root';
import ErrorBoundary from './error_pages/PageNotFound';

import Tabs from '../modules/tabs';
import Profile from '../components/Profile';

const dataLinks = [
  {
    title: 'Профиль',
    pathname: '/profile',
  },
  {
    title: 'Услуги',
    pathname: 'services',
  },
  {
    title: 'Товары',
    pathname: 'goods',
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorBoundary />}>
      <Route index element={<h2>Здесь будет главная</h2>} />
      <Route
        path="profile"
        element={<Tabs dataLinks={dataLinks} style={{ marginTop: '48px' }} />}
      >
        <Route index element={<Profile />} />
        <Route path="services" element={<h2>Здесь будут услуги</h2>} />
        <Route path="goods" element={<h2>Здесь будут товары</h2>} />
      </Route>
      <Route path="services" element={<h2>Здесь будут услуги</h2>} />
      <Route path="goods" element={<h2>Здесь будут товары</h2>} />
      <Route path="magazine" element={<h2>Здесь будет журнал</h2>} />
    </Route>,
  ),
);

export default router;
