import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

function ProductItem({
  product_name,
  product_description,
  product_price,
  url,
  id,
}) {
  let { productsDispatch } = useContext(MyContext);

  let [show, setShow] = useState(false);
  let inputPriceValue = useRef("");
  let inputDescriptionValue = useRef("");

  let navigate = useNavigate();

  return (
    <li>
      <p>{product_name}</p>
      <p>{product_description}</p>
      <p>{product_price}</p>
      <img src={url} alt={product_name} />
      <button onClick={() => productsDispatch({type:'DELETE', payload:id})}>DELETE</button>
      <button onClick={() => navigate("/product-page/" + id)}>SHOW</button>

      <button
        onClick={() => {
          setShow(!show);
          inputPriceValue.current = product_price;
          inputDescriptionValue.current = product_description;
        }}
      >
        EDIT
      </button>
      <form className={show ? "" : "hide"}>
        <input
          type="text"
          placeholder="product_description"
          defaultValue={inputDescriptionValue.current}
        />
        <input
          type="text"
          placeholder="product_price"
          defaultValue={inputPriceValue.current}
        />
      </form>
    </li>
  );
}

export default ProductItem;
