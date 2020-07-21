"use strict"

import { combineReducers } from "redux";

// Reducers To Combine
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers';

// Reducers Combination
export default combineReducers({
    books: booksReducers,
    cart: cartReducers
})