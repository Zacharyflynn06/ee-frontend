import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'


export const getProducts = createAsyncThunk(
    'shop/getProducts',
    async (thunkAPI) => {
        const response = await fetch('http://localhost:3001/products')
        
        const data = await response.json()
        if (response.ok) {
            return data
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    }
)

export const addProduct = createAsyncThunk(
    'shop/addProduct',
    async (product, thunkAPI) => {
        
        const response = await fetch(
            'http://localhost:3001/products', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: product
            }
        )
        const data = await response.json()
        if (response.ok) {
            return data
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    })

export const updateProduct = createAsyncThunk(
    'shop/updateProduct',
    async (product, thunkAPI) => {        
        const parsedId = parseInt(product.id)
        const response = await fetch(
            `http://localhost:3001/products/${parsedId}`, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                },
                body: product.data
            }
        )
        const data = await response.json()
        if (response.ok) {
            return data
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    }
)

export const deleteProduct = createAsyncThunk(
    'shop/deleteProduct',
    async (product, thunkAPI) => {
        const parsedId = parseInt(product.id)
        const response = await fetch(
            `http://localhost:3001/products/${parsedId}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                }
            }
        )
        const data = response.json()
        if (response.ok) {
            return data
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    }
)

const initialState = {

    status: 'idle',
    message: null,
    products: []
}

export const shopSlice = createSlice({
    
    name: 'Shop',
    initialState,
    reducers: {
        clearState: (state) => {
            state.status = 'idle'
            return state
        }
    },
    extraReducers: {
        // Get 
        [getProducts.pending]: (state) => {
  
            state.status = 'loading'
        },

        [getProducts.fulfilled]: (state, { payload} ) => {
            state.status = 'complete'
            state.products = payload.data
            console.log('payload', payload)
            
        },
        
        [getProducts.rejected]: (state, { payload} ) => {
            state.status = 'rejected'
            
            console.log('payload', payload)
        },

        // Add
        [addProduct.pending]: (state) => {
            state.status = 'loading'
        },

        [addProduct.fulfilled]: (state, {payload} ) => {
            state.status = 'complete'
            state.products = state.products.concat([payload.data])
            
        },
        
        [addProduct.rejected]: (state, { payload} ) => {
            state.status = 'rejected'
           
     
            console.log('payload', payload)
        },

        // Update
        [updateProduct.pending]: (state) => {
            state.status = 'loading'
        },

        [updateProduct.fulfilled]: (state, { payload} ) => {
            state.status = 'complete'
            console.log(payload)
            const product = state.products.find(product => product.id === payload.data.id)
            product.attributes = payload.data.attributes

        },
        
        [updateProduct.rejected]: (state, { payload} ) => {
            state.status = 'rejected'
     
            console.log('payload', payload)
        },

        [deleteProduct.pending]: (state) => {
            state.status = 'loading'
        },

        [deleteProduct.fulfilled]: (state, { payload} ) => {
            state.status = 'complete'
            console.log("before", current(state))
            const product = state.products.find(product => product.id === payload.data.id)
            state.products -= product
            

        },
        
        [deleteProduct.rejected]: (state, { payload} ) => {
            state.status = 'rejected'
     
            console.log('payload', payload)
        },
    }
})

export const { clearState } = shopSlice.actions

export const shopSelector = (state) => state.shop

export const selectProducts = (state) => state.shop.products

export default shopSlice.reducer