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
import LoginNoAccount from '../pages/LoginNoAccount';
import LoginWithAccount from '../pages/LoginWithAccount';

import Registration from '../pages/Registration';
import SuccessfulSignup from '../pages/SuccessfulSignup';

import { dataLinksProfile } from '../assets/constants/dataPath';
import { dataArticlePage } from '../assets/constants/constants';
import SelectedProducts from '../pages/SelectedProducts';
import Service from '../pages/Service';
import SelectedArticles from '../pages/SelectedArticles';
import ServicesList from '../pages/ServicesList';
import Catalog from '../pages/Catalog';
import GoodsList from '../pages/GoodsList';

// import PopupWithForm from '../components/PopupWithForm';
// import BookingCancellationPopup from '../components/BookingCancellationPopup/index';
// import QuitConfirmationPopup from '../components/QuitConfirmationPopup/index';
// import QuitInfotooltipPopup from '../components/QuitInfotooltipPopup';
// import EditAvatarPopup from '../components/EditAvatarPopup/index';
// import EditAvatarConfirmationPopup from '../components/EditAvatarConfirmationPopup/index';
// import AdRemovingPopup from '../components/AdRemovingPopup';
// import BookingConfirmationPopup from '../components/BookingConfirmationPopup';
// import BookingRevokePopup from '../components/BookingRevokePopup';
// import SpecialistCardListMainPage from '../modules/mainPage/specialistCardList';

import {
  dataSelectedProducts,
  dataArticle,
} from '../assets/constants/temporaryData';
import petList from '../assets/constants/petList';
import Goods from '../pages/Goods';
import Recovery from '../pages/Recovery';
import RecoveryCode from '../pages/RecoveryCode';
import RecoveryPassword from '../pages/RecoveryPassword';
import SuccessfulRecovery from '../pages/SuccessfulRecovery';

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

      {/* Main Page */}
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
      <Route 
        path="services" 
        element={<Catalog title='Наши услуги'/>}
      >
        <Route index element={<ServicesList isServicesPage/>} />
        <Route path=":service" element={<Service />} />
      </Route>

      {/* Goods */}
      <Route path="goods" element={<Catalog title="Товары" />}>
        <Route index element={<GoodsList />} />
        <Route path=":category" element={<Goods />} />
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
        <Route path="services" element={<h1>избранные услуги</h1>} />
        <Route
          path="articles"
          element={<SelectedArticles dataArticle={dataArticle} />}
        />
      </Route>

      {/* Basket */}
      <Route path="basket" element={<h2>Здесь будет корзина</h2>} />

      {/* Login */}
      <Route path="signin" element={<Login />} />
      <Route path="signin-no-account" element={<LoginNoAccount />} />
      <Route path="signin-with-account" element={<LoginWithAccount />} />

      {/* SignUp */}
      <Route path="signup" element={<Registration />} />
      <Route path="successful-signup" element={<SuccessfulSignup />} />

      {/* Recovery */}
      <Route path="recovery" element={<Recovery />} />
      <Route path="recovery-code" element={<RecoveryCode />} />
      <Route path="recovery-password" element={<RecoveryPassword />} />
      <Route path="successful-recovery" element={<SuccessfulRecovery />} />

      {/*  Роут для проверки своих компонентов в адресной строке ввест /test */}
      <Route
        path="test"
        element={<h1>TEST</h1>}
      />
    </Route>,
  ),
);

export default router;
