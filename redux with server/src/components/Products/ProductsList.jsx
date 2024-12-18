import {  useEffect } from "react";
import ProductsItem from "./ProductsItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/reducerProducts";

function ProductsList() {
  let dispatch = useDispatch()
  let products = useSelector((state) => state.productsReducer.products)
  console.log(products)

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  return (
    <ul>
      {products.map((item) => (
        <ProductsItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default ProductsList;
