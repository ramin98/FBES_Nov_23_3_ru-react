import { Link, Outlet, useLocation, useParams } from "react-router-dom";

function ProductPage() {
  let location = useLocation();
  let { id } = useParams();
  console.log(location)

  return (
    <li>
      <h1>{id}</h1>
      <Link to='name-description' state={location.state}>NAME AND DESCRIPTION</Link>
      <Link to='price-url'  state={location.state}>PRICE AND URL</Link>

      <Outlet/>
    </li>
  );
}

export default ProductPage;
