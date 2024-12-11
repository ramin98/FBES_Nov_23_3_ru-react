import { useState } from "react";
import { goods } from "../assets/products";
import ProductsPage from "./Pages/ProductsPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import ProductNameDescription from "./Products/ProductNameDescription";
import ProductPriceUrl from "./Products/ProductPriceUrl";

function MainComp() {
  let [productsArray, setProductsArray] = useState([...goods]);

  return (
    <main>
      <h1>Main</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              productsArray={productsArray}
              setProductsArray={setProductsArray}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="product-page/:id" element={<ProductPage />}>
          <Route path="name-description" element={<ProductNameDescription />} />
          <Route path="price-url" element={<ProductPriceUrl />} />
        </Route>
      </Routes>
    </main>
  );
}

export default MainComp;
