import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      // console.log(action.payload.id); we get id from client side

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice =
          Number(existingItem.price) * existingItem.quantity;
      } else {
        state.products.push({
          ...action.payload,
          price: Number(action.payload.price),
          quantity: 1,
          totalPrice: Number(action.payload.price),
        });
      }

      state.totalPrice = state.products.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
      state.totalQuantity = state.products.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = state.products.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
      state.totalQuantity = state.products.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },

    increaseQuantity: (state, action) => {
      const findItem = state.products.find(
        (item) => item.id === action.payload
      );
      if (findItem) {
        findItem.quantity += 1;
        findItem.totalPrice = findItem.price * findItem.quantity;
      }

      state.totalPrice = state.products.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
      state.totalQuantity = state.products.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },

    decreaseQuantity: (state, action) => {
      const findItem = state.products.find(
        (item) => item.id === action.payload
      );
      if (findItem && findItem.quantity > 1) {
        findItem.quantity -= 1;
        findItem.totalPrice = findItem.price * findItem.quantity;
      }

      state.totalPrice = state.products.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
      state.totalQuantity = state.products.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
