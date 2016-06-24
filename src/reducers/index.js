import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import selectBook from './selectBookReducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: selectBook
});

export default rootReducer;
