import { useLocation, useOutletContext } from "react-router-dom";

function ProductNameDescription() {
  // let { state } = useLocation();
  let info = useOutletContext()
  console.log(info)

  return (
    <>
      <p>{info.product_name}</p>
      <p>{info.product_description}</p>
    </>
  );
}

export default ProductNameDescription;
