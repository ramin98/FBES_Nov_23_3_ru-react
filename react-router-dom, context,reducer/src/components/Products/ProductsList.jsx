import { useContext } from "react";
import ProductItem from "./ProductItem";
import { MyContext } from "../../App";

function ProductsList() {
  let { productsState } = useContext(MyContext);

  return (
    <section>
      <ul>
        {productsState.products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default ProductsList;
