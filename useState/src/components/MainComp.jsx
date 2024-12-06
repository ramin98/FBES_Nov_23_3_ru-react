import { useState } from "react"
import ProductsList from "./Products/ProductsList"
import {goods} from "../assets/products"
import AddForm from "./Products/AddForm"
function MainComp() {
    let [productsArray, setProductsArray] = useState([...goods])

    return(
        <main>
            <h1>Main</h1>
            <AddForm productsArray={productsArray} setProductsArray={setProductsArray}/>
            <ProductsList productsArray={productsArray}/>
        </main>
    )
}

export default MainComp