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
import Main from '../pages/Main/Main';
import PetCardList from '../modules/petCardList';
import ProfileServices from '../pages/ProfileServices';
import ProfileGoods from '../pages/ProfileGoods';
import Articles from '../pages/Articles/index';
import Login from '../pages/Login';

import { dataLinksProfile } from '../assets/constants/dataPath';
import { dataArticlePage } from '../assets/constants/constants';
import SelectedProducts from '../pages/SelectedProducts';
import SelectedServices from '../pages/SelectedServices/index';
import SelectedArticles from '../pages/SelectedArticles';

import {
  dataSelectedProducts,
  dataArticle,
} from '../assets/constants/temporaryData';
import petList from '../assets/constants/petList';
import GoodsCathegoryCardList from '../components/GoodsCathegoryCardList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorBoundary />}>
      <Route index element={<Main />} />
      <Route
        path="profile"
        element={<Tabs dataLinks={dataLinksProfile} marginT />}
      >
        <Route element={<Profile />}>
          <Route index element={<PetCardList petList={petList} />} />
          <Route path="addpet" element={<p>тут будет добавление питомца</p>} />
          <Route path=":id" element={<p>тут будет редактирование питомца</p>} />
        </Route>
        <Route path="services" element={<ProfileServices />} />
        <Route path="goods" element={<ProfileGoods />} />
      </Route>
      <Route path="services" element={<h2>Здесь будут услуги</h2>} />
      <Route path="goods" element={<h2>Здесь будут товары</h2>} />
      <Route
        path="magazine"
        element={<Articles dataArticle={dataArticlePage} />}
      />
      <Route path="favourites" element={<Favourites />}>
        <Route
          path="goods"
          element={<SelectedProducts dataProducts={dataSelectedProducts} />}
        />
        <Route path="services" element={<SelectedServices />} />
        <Route
          path="articles"
          element={<SelectedArticles dataArticle={dataArticle} />}
        />
      </Route>
      <Route path="basket" element={<h2>Здесь будет корзина</h2>} />
      <Route path="signin" element={<Login />} />
      <Route path="signup" element={<h2>Здесь будет регистрация</h2>} />
      <Route
        path="recovery"
        element={<h2>Здесь будет восстановление аккаунта</h2>}
      />

      {/*  Роут для проверки своих компонентов в адресной строке ввест /test */}
      <Route
        path="test"
        element={<GoodsCathegoryCardList/>}
      />
    </Route>,
  ),
);

export default router;
