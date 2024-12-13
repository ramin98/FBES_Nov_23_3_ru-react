import { useOutletContext } from "react-router-dom";
import ProductItem from "./ProductItem";

function ProductsList() {
  let { productsArray } = useOutletContext();

  return (
    <section>
      <ul>
        {productsArray.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default ProductsList;
