import { configureStore } from '@reduxjs/toolkit';
import articleTitleReducer from './articleTitle';

const store = configureStore({
  reducer: {
    articleTitle: articleTitleReducer, // имя статьи для крошек
    // Другие редьюсеры
  },
});

export default store;
