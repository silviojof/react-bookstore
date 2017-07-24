"use strict"

//BOOKS REDUCERS
export function booksReducers(state = {books: [
  {
    _id: 1,
    title: 'Fundamentals of Python',
    description: 'This is the description of the book.',
    price: 33
  },
  {
    _id: 2,
    title: 'Learn React and Redux',
    description: 'This is the description of the second book.',
    price: 44
  }
]}, action) {
  switch(action.type) {
    case "GET_BOOKS":
      return {...state, books: [...state.books]};
      break;
    case "POST_BOOK":
      // let books = state.books.concat(action.payload);
      // return {books};
      return {books: [...state.books, ...action.payload]}
      break;
    case "DELETE_BOOK":
      const currentBookToDelete = [...state.books];
      const indexToDelete = currentBookToDelete.findIndex(function(book){
        return book._id === action.payload._id;
      });
      return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]};
      break;
    case "UPDATE_BOOK":
      const currentBookToUpdate = [...state.books];
      const indexToUpdate = currentBookToUpdate.findIndex(function(book){
        return book._id === action.payload._id;
      });
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      }
      return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]};
      break;
    }
  return state;
}
