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
import SpecialistsCard from '../modules/specialistsCard';

import { dataLinksProfile } from '../assets/constants/dataPath';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorBoundary />}>
      <Route index element={<h2>Здесь будет главная</h2>} />
      <Route
        path="profile"
        element={<Tabs dataLinks={dataLinksProfile} marginT />}
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
        // element={<h2>Сюда можно вставлять свои компоненты для проверки</h2>}
        element={<SpecialistsCard 
          // img='https://avatars.mds.yandex.net/i?id=2df3575db13ac51b990cca3baa3b9c985c0bb5ce-7758910-images-thumbs&n=13'
          name='Юлия'
          profession='Грумер на дом, стрижка, вычес'
          price='2 000'
          workedWith=' лошадьми'
          description='Предоставляю услуги груминга собак с выездом на дом. Кошек не стригу! Шпиц от 2000р, пудель от 3000р. Воскресенье - выходной!'
          numReviews={2}
          scoreReview='5.0'
        />}
      />
    </Route>,
  ),
);

export default router;
