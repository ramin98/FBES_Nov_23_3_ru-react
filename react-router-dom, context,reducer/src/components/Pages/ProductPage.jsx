import { useContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { MyContext } from "../../App";

function ProductPage() {
  let {productsState} = useContext(MyContext)
  let { id } = useParams();
  let parsedId = parseInt(id)
  let productIndex = productsState.products.findIndex((item) => item.id === parsedId)

  return (
    <li>
      <h1>{id}</h1>
      <Link to='name-description'>NAME AND DESCRIPTION</Link>
      <Link to='price-url'>PRICE AND URL</Link>

      <Outlet context={productsState.products[productIndex]}/>
    </li>
  );
}

export default ProductPage;
