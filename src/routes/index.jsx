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
import ProfileServices from '../pages/ProfileServices';
import ProfileGoods from '../pages/ProfileGoods';
import Articles from '../pages/Articles/index';

import Login from '../pages/Login';
import LoginNoAccount from '../pages/LoginNoAccount';
import LoginWithAccount from '../pages/LoginWithAccount';

import Registration from '../pages/Registration';
import SuccessfulSignup from '../pages/SuccessfulSignup';

import Recovery from '../pages/Recovery';
import RecoveryCode from '../pages/RecoveryCode';
import RecoveryPassword from '../pages/RecoveryPassword';
import SuccessfulRecovery from '../pages/SuccessfulRecovery';

import { dataLinksProfile } from '../assets/constants/dataPath';
import {
  dataArticlePage,
  dataFavouriteArticles
} from '../assets/constants/dataArticles';
import SelectedProducts from '../pages/SelectedProducts';
import SelectedServices from '../pages/SelectedServices';
import Service from '../pages/Service';
import SelectedArticles from '../pages/SelectedArticles';
import ServicesList from '../pages/ServicesList';
import Catalog from '../pages/Catalog';
import GoodsList from '../pages/GoodsList';

import PetCard from '../pages/PetCard';

import ProfileServicesList from '../pages/ProfileServicesList';
import ProfileServicesHistoryList from '../pages/ProfileServicesHistoryList';
import ProfileBookingCancellation from '../pages/ProfileBookingCancellation';
import ProfileBokingCanceled from '../pages/ProfileBokingCanceled';
import BookingFeedback from '../pages/BookingFeedback';

import AdvertFinal from '../pages/AdvertFinal';
import FillingSchedule from '../pages/FillingSchedule';

import AdType from '../components/AdCreation/AdType/index';
import AdTitle from '../components/AdCreation/AdTitle';
import AdDogHandler from '../components/AdCreation/AdDogHandler';
import AdDogHandlerStepTwo from '../components/AdCreation/AdDogHandler/AdDogHandlerStepTwo';
import AdGroomer from '../components/AdCreation/adGroomer';
import AdGroomerStepTwo from '../components/AdCreation/adGroomer/AdGroomerStepTwo';
import AdVet from '../components/AdCreation/adVet';
import AdVetStepTwo from '../components/AdCreation/adVet/AdVetStepTwo';

import {
  dataSelectedServices,
  dataSelectedProducts,
} from '../assets/constants/temporaryData';
import Goods from '../pages/Goods';
import CreationPriceServices from '../pages/CreationAdvertPrice';
import DescriptionService from '../pages/DescriptionService';
import AdvertSuccess from '../pages/AdvertSuccess';
import ArticlePage from '../pages/Article';
import EditProfileServices from '../pages/EditProfileServices';

import CardListInProfile from '../pages/CardListInProfile';
import AdImage from '../components/AdCreation/AdImage';

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
          <Route index element={<CardListInProfile />} />
          <Route path="add-pet" element={<PetCard />} />
          <Route path=":id" element={<PetCard />} />
          <Route path="edit" element={<EditProfileServices />} />
        </Route>

        <Route path="services" element={<ProfileServices />}>
          <Route index element={<ProfileServicesList />} />
          <Route path="history" element={<ProfileServicesHistoryList />} />
          <Route path="cancellation" element={<ProfileBookingCancellation />} />
          <Route path="canceled" element={<ProfileBokingCanceled />} />
          <Route path="feedback" element={<BookingFeedback />} />
        </Route>
        <Route path="goods" element={<ProfileGoods />} />
      </Route>

      {/* Services */}
      <Route path="services" element={<Catalog title="Наши услуги" />}>
        <Route index element={<ServicesList isServicesPage />} />
        <Route path=":service" element={<Service />} />
      </Route>

      {/* Goods */}
      <Route path="goods" element={<Catalog title="Товары" />}>
        <Route index element={<GoodsList />} />
        <Route path=":category" element={<Goods />} />
      </Route>

      {/* Articles */}
      <Route path="magazine">
        <Route index element={<Articles dataArticle={dataArticlePage} />} />
        <Route path=":id" element={<ArticlePage />} />
      </Route>

      {/* Favourites */}
      <Route path="favourites" element={<Favourites />}>
        <Route
          path="goods"
          element={<SelectedProducts dataProducts={dataSelectedProducts} />}
        />
        <Route
          path="services"
          element={<SelectedServices dataServices={dataSelectedServices} />}
          />
        <Route
          path="articles"
          element={<SelectedArticles dataArticle={dataFavouriteArticles} />}
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

      <Route path="advert" element={<AdType />} />
      <Route path="advert-groomer" element={<AdTitle />} />
      <Route path="advert-veterinary" element={<AdTitle />} />
      <Route path="advert-petSitting" element={<AdTitle />} />
      <Route path="advert-cynology" element={<AdTitle />} />
      <Route path="advert-cynology-pet" element={<AdDogHandler />} />
      <Route
        path="advert-cynology-services"
        element={<AdDogHandlerStepTwo />}
      />
      <Route path="advert-groomer-pet" element={<AdGroomer />} />
      <Route path="advert-groomer-services" element={<AdGroomerStepTwo />} />
      <Route path="advert-veterinary-pet" element={<AdVet />} />
      <Route path="advert-veterinary-services" element={<AdVetStepTwo />} />
      <Route path="advert-petSitting-pet" element={<AdVet />} />

      <Route path="advert-schedule" element={<FillingSchedule />} />
      <Route path="advert-price" element={<CreationPriceServices />} />
      <Route path="advert-description" element={<DescriptionService />} />
      <Route path="advert-image" element={<AdImage />} />
      <Route path="advert-final" element={<AdvertFinal />} />
      <Route path="advert-success" element={<AdvertSuccess />} />
    </Route>,
  ),
);

export default router;
