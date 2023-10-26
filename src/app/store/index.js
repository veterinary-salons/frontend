import { configureStore } from '@reduxjs/toolkit';
import articleTitleReducer from './articleTitle';
import addImgService from './saveImgService/addImage';
import { userSlice } from './userSlice';

const store = configureStore({
  reducer: {
    getImageService: addImgService,
    articleTitle: articleTitleReducer, // имя статьи для крошек
    user: userSlice.reducer, // данные пользователя
    // Другие редьюсеры
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
