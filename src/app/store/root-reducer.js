import { combineReducers } from '@reduxjs/toolkit';
import articleTitleReducer from './articleTitle';

const rootReducer = combineReducers({
  articleTitle: articleTitleReducer,
});

export default rootReducer;
