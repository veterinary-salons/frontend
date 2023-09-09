import { Offline, Online } from 'react-detect-offline';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './root';
import ErrorBoundary from './ErrorBoundary';

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

// import PopupWithForm from '../components/PopupWithForm';
// import BookingCancellationPopup from '../components/BookingCancellationPopup/index';
// import QuitConfirmationPopup from '../components/QuitConfirmationPopup/index';
import QuitInfotoolPopup from '../components/QuitInfotoolPopup/index'


import {
  dataSelectedProducts,
  dataArticle,
} from '../assets/constants/temporaryData';
import petList from '../assets/constants/petList';
import SectionTitle from '../components/SectionTitle';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
        <Online>
          <Root />
        </Online>
        <Offline>
          <ErrorBoundary />
        </Offline>
        </>
      }
      errorElement={<ErrorBoundary errorType404 />}
    >
      <Route index element={<Main />} />

      {/* Profile */}
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

      {/* Services */}
      <Route path="services" element={<SectionTitle title='Наши услуги'/>}>
        <Route element={<h2>Здесь будут услуги</h2>} />
      </Route>

      {/* Goods */}
      <Route path="goods" element={<SectionTitle title='Товары'/>}>
        <Route element={<h2>Здесь будут товары</h2>} />
      </Route>

      {/* Articles */}
      <Route
        path="magazine"
        element={<Articles dataArticle={dataArticlePage} />}
      />

      {/* Favourites */}
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

      {/* Basket */}
      <Route path="basket" element={<h2>Здесь будет корзина</h2>} />

      {/* Login */}
      <Route path="signin" element={<Login />} />

      {/* SignUp */}
      <Route path="signup" element={<h2>Здесь будет регистрация</h2>} />

      {/* Recovery */}
      <Route
        path="test"
        element={<h2>TEST</h2>}
      />

      {/*  Роут для проверки своих компонентов в адресной строке ввест /test */}
      <Route path="test" element={<h1>TEST</h1>} />
    </Route>,
  ),
);

export default router;
