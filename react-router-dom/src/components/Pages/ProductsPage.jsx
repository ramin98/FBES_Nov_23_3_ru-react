import AddForm from "../Products/AddForm"
import ProductsList from "../Products/ProductsList"

function ProductsPage({productsArray, setProductsArray}) {

    return(
        <>
            <AddForm productsArray={productsArray} setProductsArray={setProductsArray}/>
            <ProductsList productsArray={productsArray} setProductsArray={setProductsArray}/>
        </>
    )
    
}

export default ProductsPage