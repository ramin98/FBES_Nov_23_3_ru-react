import { createSlice } from "@reduxjs/toolkit";

let bagSlice = createSlice({
  name: "bag",
  initialState: {
    bag: [],
  },
  reducers: {
    getBag: (state, action) => {
      let bag = JSON.parse(localStorage.getItem("bag"));

      return { ...state, bag: bag };
    },
    addToBag: (state, action) => {
      let bag = JSON.parse(localStorage.getItem("bag"));

      let product = {
        ...action.payload,
      };

      if (bag.some((item) => item.id === product.id)) {
        let index = bag.findIndex((item) => item.id === product.id);
        bag[index].count += 1;
        bag[index].totalPrice = bag[index].count * bag[index].product_price;
      } else {
        product.count = 1;
        product.totalPrice = product.count * product.product_price;
        bag.push(product);
      }

      console.log(product);
      localStorage.setItem("bag", JSON.stringify(bag));
      return { ...state, bag: bag };
    },
  },
});

export const { getBag, addToBag } = bagSlice.actions;
export default bagSlice.reducer;
