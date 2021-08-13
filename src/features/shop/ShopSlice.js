import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const findProductById = (id) => {

}

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

export const updateProduct = createAsyncThunk(
    'shop/addProduct',
    async (product) => {
        return fetch(
            'http://localhost:3001/products', {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                },
                body: product
            }
        )
        .then(res => res.json())
    }
)

export const deleteProduct = createAsyncThunk(
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
        .then(res =>{debugger})
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
        // Get 
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

        // Add
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
        },

        // Update
        [updateProduct.pending]: (state) => {
            state.status = "loading"
        },

        [updateProduct.fulfilled]: (state, { payload} ) => {
            state.status = "success"
            debugger
            // let product = state.products.findProductById(payload.id)
            // product = payload.product
            console.log('payload', payload)
        },
        
        [updateProduct.rejected]: (state, { payload} ) => {
            state.status = "rejected"
     
            console.log('payload', payload)
        },
    }
})




export const selectProducts = (state) => state.shop.products

export default shopSlice.reducer