import { configureStore } from '@reduxjs/toolkit';
import articleTitleReducer from './articleTitle';
import {userSlice} from './userSlise';

const store = configureStore({
  reducer: {
    articleTitle: articleTitleReducer, // имя статьи для крошек
    user: userSlice.reducer, // данные пользователя
    // Другие редьюсеры
  },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
