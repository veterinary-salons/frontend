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
import SpecialistsCard from '../modules/specialistsCard';

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
        path="recovery"
        element={<h2>Здесь будет восстановление аккаунта</h2>}
        />

      {/*  Роут для проверки своих компонентов в адресной строке ввест /test */}
      <Route 
        path="test"   // element={<h2>Сюда можно вставлять свои компоненты для проверки</h2>}
        element={<SpecialistsCard 
          // img='https://avatars.mds.yandex.net/i?id=2df3575db13ac51b990cca3baa3b9c985c0bb5ce-7758910-images-thumbs&n=13'
          name='Юлия'
          profession='Грумер на дом, стрижка, вычес'
          price='2 000'
          workedWith=' лошадьми'
          description='Предоставляю услуги груминга собак с выездом на дом. Кошек не стригу! Шпиц от 2000р, пудель от 3000р. Воскресенье - выходной!'
          numReviews={2}
          scoreReview='5.0'/>}
        />
        </Route>,
  ),
);

export default router;
