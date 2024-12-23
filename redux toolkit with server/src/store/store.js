import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './reducerProducts'

export let store = configureStore({
    reducer: {
        products: productsSlice
    }
})