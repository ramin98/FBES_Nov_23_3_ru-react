export let initialObjectBag = {
  bag: [],
};

export function reducerBag(state, action) {
  let bag = JSON.parse(localStorage.getItem("bag"));
  if (action.type === "GET BAG") {
    return { ...state, bag: bag };
  } else if (action.type === "ADD TO BAG") {
    let product = {
      ...action.payload
    };
    
    if(bag.some((item) => item.id === product.id)){
        let index = bag.findIndex((item) => item.id === product.id)
        bag[index].count += 1
        bag[index].totalPrice = bag[index].count * bag[index].product_price
    }else{
        product.count = 1
        product.totalPrice = product.count * product.product_price
        bag.push(product);
    }
    
    console.log(product)
    localStorage.setItem('bag', JSON.stringify(bag))
    return { ...state, bag: bag };
  }

  return state;
}
