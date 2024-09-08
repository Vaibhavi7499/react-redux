import { createStore } from "redux";

let initialState = [];

const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case "ADD_TO_CART":
      return [...state, action?.payload];

    case "REMOVE_FROM_CART":
      return state.filter((e) => {
        return e?.id !== action?.payload;
      });

    default:
      return state;
  }
};

export const store = createStore(reducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
