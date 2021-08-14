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
            debugger
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
            const product = state.products.find(product => product.id === payload.data.id)
            product.attributes = payload.data.attributes

        },
        
        [updateProduct.rejected]: (state, { payload} ) => {
            state.status = "rejected"
     
            console.log('payload', payload)
        },
    }
})



export const selectStatus = (state) => state.shop.status

export const selectProducts = (state) => state.shop.products

export const selectProductById = (state, productId) => {
    debugger
    state.shop.products.find(product => product.id === productId)
}

export default shopSlice.reducer