import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useHistory } from 'react-router-dom'


export const getProducts = createAsyncThunk(
    'shop/getProducts',
    async () => {
        return fetch('http://localhost:3001/products')
        .then(res => res.json())
    }
)



export const addProduct = createAsyncThunk(
    'shop/addProduct',
    async (product) => {
        return fetch(
            'http://localhost:3001/products', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: product
            }
        )
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
        },
        [addProduct.pending]: (state) => {
            state.status = "loading"
        },

        [addProduct.fulfilled]: (state, { payload} ) => {
            state.status = "success"
            state.products = state.products.concat([payload.data])
            
            console.log('payload', payload)
        },
        
        [addProduct.rejected]: (state, { payload} ) => {
            state.status = "rejected"
     
            console.log('payload', payload)
        }
    }
})




export const selectProducts = (state) => state.shop.products

export default shopSlice.reducer