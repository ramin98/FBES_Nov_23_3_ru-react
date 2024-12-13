import { Link, Outlet, useLocation, useOutletContext, useParams } from "react-router-dom";

function ProductPage() {
  let location = useLocation();
  let {productsArray} = useOutletContext()
  let { id } = useParams();
  console.log(location)
  let parsedId = parseInt(id)
  let productIndex = productsArray.findIndex((item) => item.id === parsedId)
  console.log(productsArray[productIndex])

  return (
    <li>
      <h1>{id}</h1>
      <Link to='name-description'>NAME AND DESCRIPTION</Link>
      <Link to='price-url'>PRICE AND URL</Link>

      <Outlet context={productsArray[productIndex]}/>
      {/* <Outlet /> */}
    </li>
  );
}

export default ProductPage;
