import { useLocation, useOutletContext } from "react-router-dom";

function ProductPriceUrl() {
  let { state } = useLocation();

  return (
    <li>
      <img src={state.url} />
      <p>{state.product_price}</p>
    </li>
  );
}

export default ProductPriceUrl;
