import ProductItem from "./ProductItem";

function ProductsList({productsArray}) {

  return (
    <section>
      <ul>
       {productsArray.map((item) => <ProductItem key={item.id} {...item}/>)}
      </ul>
    </section>
  );
}

export default ProductsList;
