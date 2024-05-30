
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  isQuantityOverStocks: false,
  watchList: [],
  watchListItemExist: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const { id, selectedColor, quantity, attributes: { stocks } } = action.payload;
      const existingItem = state.cart.find(item => item.id === id && item.selectedColor === selectedColor);

      if (existingItem) {
        existingItem.quantity = Math.min(existingItem.quantity + quantity, stocks);
      } else {
        state.cart.push({ ...action.payload, quantity: Math.min(quantity, stocks) });
      }
    },
    addProductToWatchLst: (state, action) => {
      state.watchList.push({ ...action.payload });
    },
    removeCartItem: (state, action) => {
        const { selectedColor, id } = action.payload;
        state.cart = state.cart.filter(item => item?.id == id ? item?.selectedColor !== selectedColor : item);
    },
    removeWatchListItem: (state, action) => {
      console.log(action.payload);
      const { id } = action?.payload;
      state.watchList = state.watchList?.filter(item => item?.id !== id);
    },
  },
});

export const { addProductToCart, removeCartItem,removeWatchListItem, addProductToWatchLst } = cartSlice.actions;
export default cartSlice.reducer;