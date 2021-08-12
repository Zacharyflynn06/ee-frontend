import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const getProducts = createAsyncThunk(
    'shop/getProducts',
    async () => {
        return fetch('http://localhost:3001/products')
        .then(res => res.json())
    }
)

const initialState = {
    status: null,
    products: []
}

export const shopSlice = createSlice({
    name: 'Shop',
    initialState,
    reducers: {
  

        
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.status = "loading"
        },

        [getProducts.fulfilled]: (state, { payload} ) => {
            state.status = "successs"
            state.products = payload.data
            console.log('payload', payload)
        },
        
        [getProducts.rejected]: (state, { payload} ) => {
            state.status = "rejected"
     
            console.log('payload', payload)
        }
    }
})




export const selectProducts = (state) => state.shop.products

export default shopSlice.reducer