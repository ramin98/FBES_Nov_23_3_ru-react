import { goods } from "../assets/products";

export let initialObjectProducts = {
  products: goods,
};

export function reducerProducts(state, action) {
  if (action.type === "ADD TO PRODUCTS") {
    let newArr = [...state.products];
    let product = { ...action.payload };
    product.id = newArr.length === 0 ? 1 : newArr.at(-1).id + 1;
    newArr.push(product);
    return { ...state, products: newArr };
  } else if (action.type === "DELETE") {
    let newArr = [...state.products];
    let index = newArr.findIndex((item) => action.payload === item.id);
    newArr.splice(index, 1);
    return { ...state, products: newArr };
  }

  return state;
}
