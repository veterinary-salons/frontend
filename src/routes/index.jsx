import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './root';
import ErrorBoundary from './errorPages/PageNotFound';

import Tabs from '../modules/tabs';
import Profile from '../pages/Profile';
import Favourites from '../pages/Favourites';

import { dataLinksProfile } from '../assets/constants/dataPath';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorBoundary />}>
      <Route index element={<h2>Здесь будет главная</h2>} />
      <Route
        path="profile"
        element={
          <Tabs dataLinks={dataLinksProfile} style={{ marginTop: '48px' }} />
        }
      >
        <Route index element={<Profile />} />
        <Route path="services" element={<h2>Здесь будут услуги</h2>} />
        <Route path="goods" element={<h2>Здесь будут товары</h2>} />
      </Route>
      <Route path="services" element={<h2>Здесь будут услуги</h2>} />
      <Route path="goods" element={<h2>Здесь будут товары</h2>} />
      <Route path="magazine" element={<h2>Здесь будет журнал</h2>} />
      <Route path="favourites" element={<Favourites />}>
        <Route path="goods" element={<h2>Здесь будут сохраненные товары</h2>} />
        <Route
          path="services"
          element={<h2>Здесь будут сохраненные услуги</h2>}
        />
        <Route
          path="articles"
          element={<h2>Здесь будут сохраненные статьи</h2>}
        />
      </Route>
      <Route path="basket" element={<h2>Здесь будет корзина</h2>} />

      {/*  Роут для проверки своих компонентов в адресной строке ввест /test */}
      <Route
        path="test"
        element={<h2>Сюда можно вставлять свои компоненты для проверки</h2>}
      />
    </Route>,
  ),
);

export default router;
