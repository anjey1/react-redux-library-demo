// BOOK REDUCERS
export function cartReducers(state = {
    cart : []
}, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            debugger;
            return {
                ...state,
                cart: action.payload
            };
        case "UPDATE_CART":
            debugger;

            let currentBookToUpdate = [...state.cart];

            const indexToUpdate = [...state.cart].findIndex((book) => {
                return book._id === action._id;
            });

            // state.cart[indexToUpdate] = {
            // ...state.cart[indexToUpdate],
            // quantity: state.cart[indexToUpdate].quantity + action.unit,
            // };

            const newBookToUpdate = {
                ... currentBookToUpdate[indexToUpdate],
                quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
            };

            let cartUpdate = [
                ... currentBookToUpdate.slice(0, indexToUpdate),
                newBookToUpdate,
                ... currentBookToUpdate.slice(indexToUpdate + 1),
            ];

            // https://www.pluralsight.com/guides/fetching-data-updating-state-react-class
            // https://reactjs.org/docs/react-component.html#setstate

            // Not as original
            return {
                ...state,
                cart: cartUpdate
            };

            // return { ...state, cart: state.cart };
        case "DELETE_CART_ITEM":
            debugger;
            return {
                ...state,
                cart: action.payload
            };
        default:
            return state;
            break;
    }
}
