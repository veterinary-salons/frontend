import { configureStore } from '@reduxjs/toolkit';
import articleTitleReducer from './articleTitle';
import addServiesReducer from './addServise/servies-reducer';

const store = configureStore({
  reducer: {
    addServies: addServiesReducer,
    articleTitle: articleTitleReducer, // имя статьи для крошек
    // Другие редьюсеры
  },
});

export default store;
