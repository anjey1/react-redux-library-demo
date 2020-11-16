"use strict";

import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";

import reducers from "./reducers/index";
// import { addToCart } from "./actions/cartActions";
// import { postBooks, deleteBooks, updateBooks } from "./actions/booksActions";

// create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// // Subscribe to Store Changes
// store.subscribe(() => {
//     console.log('current state is ', store.getState())
// })

// create and dispatch actions
// store.dispatch({ type: 'INCREMENT', payload: 1 })
// store.dispatch({ type: 'DECREMENT', payload: 9 })
// store.dispatch({ type: 'INCREMENT', payload: 2 })
// store.dispatch({ type: 'INCREMENT', payload: 3 })

import Main from "./main";
import BookList from "./components/pages/booklist";
import Cart from "./components/pages/cart";
import BooksForm from "./components/pages/booksForm";

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/"
                component={Main}>
                <IndexRoute component={BookList}/>
            </Route>
        </Router>
    </Provider>
);

render(Routes, document.getElementById("app"));

// // DISPATCH an other book
// store.dispatch(
// postBooks([
//     {
//       id: 1,
//       title: "Parry Hotter",
//       description: "Greatet book of them all",
//       price: 33.33,
//     },
//     {
//       id: 2,
//       title: "Parry Hotter",
//       description: "Greatet book of them all Two",
//       price: 50.55,
//     },
//     {
//       id: 4,
//       title: "Parry Hotter",
//       description: "Greatet book of them all Two",
//       price: 50.55,
//     },
// ])
// );

// store.dispatch(deleteBooks({ id: 2 }));

// // DISPATCH an other book
// store.dispatch(
// updateBooks({
//     id: 4,
//     title: "Marry Hotter",
// })
// );

// // ADD to cart
// store.dispatch(addToCart([{ id: 1 }]));
