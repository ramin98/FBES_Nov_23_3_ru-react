import { useEffect } from "react";
import "./App.css";

import MainComponent from "./components/MainComponent";
import Header from "./components/Header";


function App() {


  useEffect(() => {
    if (!localStorage.getItem("bag")) {
      localStorage.setItem("bag", JSON.stringify([]));
    }
  });

  return (
    <>
      <Header />
      <MainComponent />
    </>
  );
}

export default App;
