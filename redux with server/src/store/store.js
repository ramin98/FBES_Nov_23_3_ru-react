import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducerProducts } from "./reducerProducts";
import { combineReducers } from "redux";
import { reducerBag } from "./reducerBag";

let reducers = combineReducers({
    productsReducer: reducerProducts,
    bagReducer: reducerBag,
})

export let store = createStore(reducers, applyMiddleware(thunk))