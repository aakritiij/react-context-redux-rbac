import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    }
  }
});

export const { addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
