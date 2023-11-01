import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit"

interface IProduct {
    id: number
    name: string
    price: number
    category: string
}

interface IProductsState {
    products: Array<IProduct>
}

const initialState: IProductsState = {
    products: []
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<IProduct[]>) {
            state.products = action.payload
        }
    }
})

export const GET_PRODUCTS = 'products/getProducts';
export const getProducts = createAction(GET_PRODUCTS);

export const { setProducts } = productsSlice.actions
export const productsReducer = productsSlice.reducer