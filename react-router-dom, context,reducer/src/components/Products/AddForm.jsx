import { useContext } from "react";
import { MyContext } from "../../App";

function AddForm() {
  let { productsDispatch } = useContext(MyContext)

  function addToArray(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    productsDispatch({type:'ADD TO PRODUCTS', payload: formData})
  }

  return (
    <section>
      <h1>Add Form</h1>
      <form onSubmit={addToArray}>
        <input type="text" name="product_name" placeholder="product_name" />
        <input
          type="text"
          name="product_description"
          placeholder="product_description"
        />
        <input type="text" name="product_price" placeholder="product_price" />
        <input type="text" name="url" placeholder="url" />
        <button>ADD</button>
      </form>
    </section>
  );
}

export default AddForm;
