"use strict"

//React
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

//IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

//IMPORT actions
import {addToCart} from './actions/cartAction';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

// CREATE AND SUBSCRIBE TO A STORE
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from'./components/pages/booksList';

render (
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
);

// DISPATCH A FIRST POST BOOK ACTION
// store.dispatch(postBooks(
//
// ));

// // DISPATCH A SECOND POST BOOK ACTION
// store.dispatch(postBooks(
//   [{
//     id: 3,
//     title: 'Fundamentals of Python',
//     description: 'This is the description of the third book.',
//     price: 55
//   }]
// ));
//
// //DELETE A BOOK
// store.dispatch(deleteBooks(
//   {id: 1}
// ));
//
// // UPDATE A book
// store.dispatch(updateBooks({
//     id: 2,
//     title: 'Learn React in 24h'
//   }
// ));

// CART ACTIONS
store.dispatch(addToCart([{id: 1}]));
