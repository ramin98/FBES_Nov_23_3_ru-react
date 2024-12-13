import { useState, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function ProductItem({
  product_name,
  product_description,
  product_price,
  url,
  id,
}) {

  let {setProductsArray,productsArray} = useOutletContext()

  let [show, setShow] = useState(false);
  let inputPriceValue = useRef("");
  let inputDescriptionValue = useRef("");

  function deleteObj() {
    let newArr = [...productsArray];
    let index = newArr.findIndex((item) => id === item.id);
    newArr.splice(index, 1);
    setProductsArray(newArr);
  }

  let navigate = useNavigate()

  return (
    <li>
      <p>{product_name}</p>
      <p>{product_description}</p>
      <p>{product_price}</p>
      <img src={url} alt={product_name} />
      <button onClick={deleteObj}>DELETE</button>
      <button
        onClick={() =>
          navigate("/product-page/" + id, {
            state: {
              product_name,
              product_description,
              product_price,
              url,
              id,
            },
          })
        }
      >
        SHOW
      </button>

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
