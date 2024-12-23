import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './reducerProducts'
import bagSlice from './reducerBag'


export let store = configureStore({
    reducer: {
        products: productsSlice,
        bag: bagSlice
    }
})