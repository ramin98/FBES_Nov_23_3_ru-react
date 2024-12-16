import { createContext, useEffect, useReducer } from "react";
import "./App.css";
import {
  initialObjectProducts,
  reducerProducts,
} from "./reducers/productsReducer/reducerProducts";
import MainComponent from "./components/MainComponent";
import Header from "./components/Header";
import { initialObjectBag, reducerBag } from "./reducers/bagReducer/reducerBag";

export const MyContext = createContext();

function App() {
  let [productsState, productsDispatch] = useReducer(
    reducerProducts,
    initialObjectProducts
  );

  let [bagState, bagDispatch] = useReducer(reducerBag, initialObjectBag);

  useEffect(() => {
    if (!localStorage.getItem("bag")) {
      localStorage.setItem("bag", JSON.stringify([]));
    }
  });

  return (
    <MyContext.Provider
      value={{ productsState, productsDispatch, bagState, bagDispatch }}
    >
      <Header />
      <MainComponent />
    </MyContext.Provider>
  );
}

export default App;
