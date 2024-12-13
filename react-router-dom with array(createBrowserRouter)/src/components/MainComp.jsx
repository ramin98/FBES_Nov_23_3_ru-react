import { useState } from "react";
import { goods } from "../assets/products";
import { Outlet } from "react-router-dom";

function MainComp() {
  let [productsArray, setProductsArray] = useState([...goods]);

  return (
    <main>
      <h1>Main</h1>

      <Outlet context={{productsArray, setProductsArray}}/>
    </main>
  );
}

export default MainComp;
