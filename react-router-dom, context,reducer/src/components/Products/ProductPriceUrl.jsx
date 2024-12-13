import { useOutletContext } from "react-router-dom";

function ProductPriceUrl() {
  let info = useOutletContext()

  return (
    <>
      <img src={info.url} />
      <p>{info.product_price}</p>
    </>
  );
}

export default ProductPriceUrl;
