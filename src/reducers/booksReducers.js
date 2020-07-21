// BOOK REDUCERS
export function booksReducers(
  state = {
    books: [
      {
        _id: 1,
        title: "Parry Hotter",
        description: "Greatet book of them all",
        price: 32.33,
      },
      {
        _id: 2,
        title: "Parry Hotter",
        description: "Greatet book of them all Two",
        price: 55.55,
      },
      {
        _id: 4,
        title: "Parry Hotter",
        description: "Greatet book of them all Two",
        price: 50.51,
      },
    ],
  },
  action
) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    case "GET_BOOK":
      return { ...state, books: [...state.books] };
    case "POST_BOOK":
      return { books: [...state.books, ...action.payload] };
    case "DELETE_BOOK":
      const bookToDelete = [...state.books].findIndex((book) => {
        return book._id === action.payload._id;
      });
      // id = 3 [0,1,2,3,4,5] = [...[0,1,2], ...[4,5]]
      return {
        books: [
          ...state.books.slice(0, bookToDelete),
          ...state.books.slice(bookToDelete + 1),
        ],
      };
    case "UPDATE_BOOK":
      const bookToUpdate = [...state.books].findIndex((book) => {
        return book._id === action.payload._id;
      });

      state.books[bookToUpdate] = {
        ...state.books[bookToUpdate],
        title: action.payload.title,
      };

      return { books: state.books };
    default:
      return state;
      break;
  }
}
