import {  useEffect } from "react";
import ProductsItem from "./ProductsItem";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../../store/reducerProducts";

function ProductsList() {
  let dispatch = useDispatch()
  let products = useSelector((state) => state.products.products)
  let loading = useSelector((state) => state.products.loading)
  let error = useSelector((state) => state.products.error)

  console.log(products)

  useEffect(() => {
    dispatch(productsFetch())
  }, []);

  if(loading){
    return <h1>LOADING...</h1>
  }

  if(error){
    return <h1>ERROR!!!</h1>
  }

  return (
    <ul>
      {products.map((item) => (
        <ProductsItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default ProductsList;
