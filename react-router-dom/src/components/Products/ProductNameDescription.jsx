import { useLocation } from "react-router-dom";

function ProductNameDescription() {
  let { state } = useLocation();

  return (
    <li>
      <p>{state.product_name}</p>
      <p>{state.product_description}</p>
    </li>
  );
}

export default ProductNameDescription;
