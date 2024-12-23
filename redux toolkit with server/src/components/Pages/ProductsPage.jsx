import { useDispatch } from "react-redux";
import ProductsList from "../Products/ProductsList";
import { productsSorting } from "../../store/reducerProducts";

function ProductsPage() {
  

  let dispatch = useDispatch()
  return (
    <section>
      <h1>Products Page</h1>
      <select onChange={(ev) => dispatch(productsSorting(ev.target.value))}>
        <option value="UP">UP</option>
        <option value="DOWN">DOWN</option>

      </select>
      <ProductsList/>
    </section>
  );
}

export default ProductsPage;
