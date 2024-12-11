import ProductItem from "./ProductItem";

function ProductsList({ productsArray, setProductsArray }) {
  return (
    <section>
      <ul>
        {productsArray.map((item) => (
          <ProductItem
            key={item.id}
            setProductsArray={setProductsArray}
            productsArray={productsArray}
            {...item}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProductsList;
