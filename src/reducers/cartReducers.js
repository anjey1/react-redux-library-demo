// BOOK REDUCERS
export function cartReducers(state = {
    cart : []
}, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            };
        case "GET_CART":
            return {
                ...state,
                cart: [...state.cart]
            };
        case "UPDATE_CART":
            const indexToUpdate = [...state.cart].findIndex((book) => {
                return book._id === action._id;
            });

            state.cart[indexToUpdate].quantity = state.cart[indexToUpdate].quantity + action.unit;

            // https://www.pluralsight.com/guides/fetching-data-updating-state-react-class
            // https://reactjs.org/docs/react-component.html#setstate
            // https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns

            // Not as original

            // If the store state is updating, but your component isn't re-rendering,
            // then look for these errors: Does your Redux store mutate state instead of
            // returning a new state object that has a different pointer ?
            // React uses shallow equality to check for changes to the state,
            // so mutating the state will not trigger re - rendering

            // a simple implementation of the shallowCompare.
            // only compares the first level properties and hence shallow.
            // state updates(theoretically) if this function returns true

            // in order for react to re-render we have to create a new
            // instance of the Array, Object "Clone The Exisiting One With The Updates"

            let newCartState = [].concat(...state.cart);

            return {
                ...state,
                cart: newCartState,
                totalAmount: totals(newCartState).amount,
                totalQty: totals(newCartState).qty
            };

            // return { ...state, cart: state.cart };
        case "DELETE_CART_ITEM":
            return {
                ...state,
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            };
        default:
            return state;
            break;
    }
}

// Reduce
// [0,1,2,3].reduce(acc,val)
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6

export function totals(payloadArr) {
    const totalAmount = payloadArr.map((cartArr) => {
        return cartArr.price * cartArr.quantity;
    }).reduce((a, b) => {
        return a + b;
    }, 0); // initial is 0

    const totalQty = payloadArr.map((qty) => {
        return qty.quantity;
    }).reduce((a, b) => {
        return a + b;
    }, 0); // initial is 0

    return {amount: totalAmount.toFixed(2), qty: totalQty};
}

export function totalQty(payloadArr) {
    return {amount: totalAmount.toFixed(2)};
}
