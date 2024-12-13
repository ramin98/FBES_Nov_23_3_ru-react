import { createContext, useReducer, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComp from "./components/MainComp";
import {goods} from './assets/products'
import { initialObjectProducts, reducerProducts } from "./reducers/productsReducer";

export const MyContext = createContext()

function App() {

  let [productsState, productsDispatch] = useReducer(reducerProducts, initialObjectProducts)

  return (
    <MyContext.Provider value={{productsState, productsDispatch}}>
      <Header />
      <MainComp />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
