import {  useOutletContext } from "react-router-dom";

function ProductNameDescription() {
  let info = useOutletContext()

  return (
    <>
      <p>{info.product_name}</p>
      <p>{info.product_description}</p>
    </>
  );
}

export default ProductNameDescription;
