import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addedRestaurant = action.payload;
      state.items.push(addedRestaurant);
      state.totalPrice += addedRestaurant.price
        ? addedRestaurant.price / 100
        : addedRestaurant.defaultPrice / 100;
    },

    removeFromCart: (state, action) => {
      const restaurantDetails = action.payload;
      console.log(restaurantDetails);
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice -= restaurantDetails?.price / 100;
    },

    clearItems: () => {
      return initialState;
    }
  },
});

export const { addToCart, removeFromCart, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
