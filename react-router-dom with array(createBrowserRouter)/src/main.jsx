import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import ProductsPage from "./components/Pages/ProductsPage";
import ProductPage from "./components/Pages/ProductPage";
import ProductNameDescription from "./components/Products/ProductNameDescription";
import ProductPriceUrl from "./components/Products/ProductPriceUrl";
const route = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { element: <Home />, index: true },
      { element: <About />, path: "/about" },
      { element: <ProductsPage />, path: "/products" },
      {
        element: <ProductPage />,
        path: "product-page/:id",
        children: [
          { element: <ProductNameDescription />,path: "name-description" },
          { element: <ProductPriceUrl />, path: "price-url" },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}/>
);
