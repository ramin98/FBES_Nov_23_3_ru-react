import { useContext } from "react";
import { MyContext } from "../../App";

function ProductsItem({
  product_name,
  product_description,
  product_price,
  url,
  id,
}) {
    
  let { bagDispatch } = useContext(MyContext);

  return (
    <li>
      <p>{product_name}</p>
      <p>{product_description}</p>
      <p>{product_price}</p>
      <img src={url} alt={product_name} />
      <button
        onClick={() =>
          bagDispatch({
            type: "ADD TO BAG",
            payload: {
              product_name,
              product_description,
              product_price,
              url,
              id,
            },
          })
        }
      >
        ADD TO BAG
      </button>
    </li>
  );
}

export default ProductsItem;
