import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'


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
    'shop/updateProduct',
    async (product) => {        
        const parsedId = parseInt(product.id)
        return fetch(
            `http://localhost:3001/products/${parsedId}`, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                },
                body: product.data
            }
        )
        .then(res => res.json())
    }
)

export const deleteProduct = createAsyncThunk(
    'shop/deleteProduct',
    async (product) => {
        const parsedId = parseInt(product.id)
        return fetch(
            `http://localhost:3001/products/${parsedId}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                }
            }
        )
        .then(res => res.json())
    }
)

const initialState = {
    status: 'idle', 
    error: null,
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
            state.status = "complete"
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

        [addProduct.fulfilled]: (state, {payload} ) => {
            state.status = "complete"
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
            state.status = "complete"
            console.log(payload)
            const product = state.products.find(product => product.id === payload.data.id)
            product.attributes = payload.data.attributes

        },
        
        [updateProduct.rejected]: (state, { payload} ) => {
            state.status = "rejected"
     
            console.log('payload', payload)
        },

        [deleteProduct.pending]: (state) => {
            state.status = "loading"
        },

        [deleteProduct.fulfilled]: (state, { payload} ) => {
            state.status = "complete"
            console.log("before", current(state))
            const product = state.products.find(product => product.id === payload.data.id)
            state.products -= product
            

        },
        
        [deleteProduct.rejected]: (state, { payload} ) => {
            state.status = "rejected"
     
            console.log('payload', payload)
        },
    }
})



export const selectStatus = (state) => state.shop.status

export const selectProducts = (state) => state.shop.products

export default shopSlice.reducer