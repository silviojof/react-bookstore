"use strict"

import {combineReducers} from 'redux';

//IMPORT REDUCERS
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

//COMBINES REDUCERS
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
});
