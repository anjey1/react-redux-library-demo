// BOOK REDUCERS
export function booksReducers(state = {
    books : [
        {
            _id: 1,
            title: "Parry Hotter",
            description: "Greatet book of them all",
            price: 32.33
        }, {
            _id: 2,
            title: "Parry Hotter",
            description: "Greatet book of them all Two",
            price: 55.55
        }, {
            _id: 4,
            title: "Parry Hotter",
            description: "Greatet book of them all Two",
            price: 50.51
        },
    ],
    _id : 4
}, action) {
    switch (action.type) {
        case "INCREMENT":
            return state._id + action.payload;
        case "DECREMENT":
            return state - action.payload;
        case "GET_BOOKS":
            return {
                ...state,
                books: [...state.books]
            };
        case "POST_BOOK":
            state._id ++;
            return {
                books: [
                    ...state.books,
                    ... action.payload
                ],
                _id: state._id
            };
        case "DELETE_BOOK":
            const bookToDelete = [...state.books].findIndex((book) => {
                return book._id.toString() === action.payload;
            });
            // id = 3 [0,1,2,3,4,5] = [...[0,1,2], ...[4,5]]
            return {
                books: [
                    ...state.books.slice(0, bookToDelete),
                    ...state.books.slice(bookToDelete + 1),
                ]
            };
        case "UPDATE_BOOK":
            const bookToUpdate = [...state.books].findIndex((book) => {
                return book._id === action.payload._id;
            });

            state.books[bookToUpdate] = {
                ...state.books[bookToUpdate],
                title: action.payload.title
            };

            return {books: state.books};
        case "UPDATE_ID":
            return state._id + action.payload;
        default:
            return state;
            break;
    }
}
