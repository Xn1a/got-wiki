import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";

const initialState = {
    books: [],
    book: {},
    loading: false,
    error: null
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));