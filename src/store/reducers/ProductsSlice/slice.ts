import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setCategory } from '../FiltersSlice/slice';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface IProductsState {
  products: Array<IProduct>;
  filteredProducts: Array<IProduct>;
}

const initialState: IProductsState = {
  products: [],
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setCategory, (state, action: PayloadAction<string>) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category === action.payload,
      );
    });
  },
});

export const GET_PRODUCTS = 'products/getProducts';
export const getProducts = createAction(GET_PRODUCTS);

export const { setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
