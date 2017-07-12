import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
  books: BooksReducer
  //Each reducer will be here ??
});

export default rootReducer;
