import ProductsPage from "./Pages/ProductsPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import ProductNameDescription from "./Products/ProductNameDescription";
import ProductPriceUrl from "./Products/ProductPriceUrl";

function MainComp() {
  return (
    <main>
      <h1>Main</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
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
