import { configureStore } from '@reduxjs/toolkit';
import articleTitleReducer from './articleTitle';
import bookingReducer from '../reducers/booking-params-reducer';

const store = configureStore({
  reducer: {
    articleTitle: articleTitleReducer, // имя статьи для крошек
    booking: bookingReducer,
    // Другие редьюсеры
  },
});

export default store;
