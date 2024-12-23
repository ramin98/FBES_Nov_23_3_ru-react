import { useDispatch } from "react-redux";
import { addToBag } from "../../store/reducerBag";

function ProductsItem({
  product_name,
  product_description,
  product_price,
  url,
  id,
}) {
  let dispatch = useDispatch();
  return (
    <li>
      <p>{product_name}</p>
      <p>{product_description}</p>
      <p>{product_price}</p>
      <img src={url} alt={product_name} />
      <button
        onClick={() =>
          dispatch(
            addToBag({
              product_name,
              product_description,
              product_price,
              url,
              id,
            })
          )
        }
      >
        ADD TO BAG
      </button>
    </li>
  );
}

export default ProductsItem;
