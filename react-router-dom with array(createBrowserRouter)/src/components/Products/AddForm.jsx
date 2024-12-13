import { useOutletContext } from "react-router-dom";

function AddForm() {
  let {productsArray, setProductsArray } = useOutletContext()

  function addToArray(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);
    formData.id = productsArray.length === 0 ? 1 : productsArray.at(-1).id + 1;
    let newArr = [...productsArray];
    newArr.push(formData);
    setProductsArray(newArr);
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
