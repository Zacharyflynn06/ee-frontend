// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// export const getProducts = createAsyncThunk(
//     'shop/getProducts',
//     async (thunkAPI) => {
//         const response = await fetch('http://localhost:3001/products')
        
//         const data = await response.json()
//         if (response.ok) {
//             return data
//         } else {
//             return thunkAPI.rejectWithValue(data)
//         }
//     }
// )

// export const addProduct = createAsyncThunk(
//     'shop/addProduct',
//     async (product, thunkAPI) => {
//         const response = await fetch(
//             'http://localhost:3001/products', {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json",
//                 },
//                 body: product
//             }
//             )
//         const data = await response.json()
//         if (response.ok) {
//             return data
            
//         } else {
//             return thunkAPI.rejectWithValue(data)
//         }
//     }
//     )

// export const updateProduct = createAsyncThunk(
//     'shop/updateProduct',
//     async (product, thunkAPI) => {        
//         const parsedId = parseInt(product.id)
//         const response = await fetch(
//             `http://localhost:3001/products/${parsedId}`, {
//                 method: "PATCH",
//                 headers: {
//                     Accept: "application/json",
//                 },
//                 body: product.data
//             }
//         )
//         const data = await response.json()
//         if (response.ok) {
//             return data
//         } else {
//             return thunkAPI.rejectWithValue(data)
//         }
//     }
// )

// export const deleteProduct = createAsyncThunk(
//     'shop/deleteProduct',
//     async (product, thunkAPI) => {
//         const parsedId = parseInt(product.id)
//         const response = await fetch(
//             `http://localhost:3001/products/${parsedId}`, {
//                 method: "DELETE",
//                 headers: {
//                     Accept: "application/json",
//                 }
//             }
//         )
//         const data = response.json()
//         if (response.ok) {
//             return data
//         } else {
//             return thunkAPI.rejectWithValue(data)
//         }
//     }
// )

// const initialState = {

//     getProductsStatus: 'idle',
//     addProductStatus: 'idle',
//     updateProductStatus: 'idle',
//     deleteProductStatus: 'idle',
//     message: '',
//     products: []
// }

// export const shopSlice = createSlice({
    
//     name: 'Shop',
//     initialState,
//     reducers: {
//         clearAddProductStatus: (state) => {
//             state.addProductStatus = 'idle'
//         },
        
//         clearUpdateProductStatus: (state) => {
//             state.updateProductStatus = 'idle'
//         },
//         clearDeleteProductStatus: (state) => {
//             state.deleteProductStatus = 'idle'
//         },
  
//     },
//     extraReducers: {
//         // Get 
//         [getProducts.pending]: (state) => {
            
//             state.getProductsStatus = 'loading'
//         },

//         [getProducts.fulfilled]: (state, { payload} ) => {
            
//             state.getProductsStatus = 'complete'
//             state.products = payload.data            
//         },
        
//         [getProducts.rejected]: (state, { payload} ) => {
            
//             state.getProductsStatus = 'rejected'
//             state.message = payload
//         },

//         // Add
//         [addProduct.pending]: (state) => {
//             state.addProductStatus = 'loading'
//         },

//         [addProduct.fulfilled]: (state, {payload} ) => {
//             state.addProductStatus = 'complete'
//             state.products = state.products.concat([payload.data])
            
//         },
        
//         [addProduct.rejected]: (state, { payload} ) => {
//             state.addProductStatus = 'rejected'
//             state.message = payload
//         },

//         // Update
//         [updateProduct.pending]: (state) => {
//             state.updateProductStatus = 'loading'
//         },

//         [updateProduct.fulfilled]: (state, { payload} ) => {
//             state.updateProductStatus = 'complete'
//             console.log(payload)
//             const product = state.products.find(product => product.id === payload.data.id)
//             product.attributes = payload.data.attributes

//         },
        
//         [updateProduct.rejected]: (state, { payload} ) => {
//             state.updateProductStatus = 'rejected'
//             state.message = payload
//             console.log('payload', payload)
//         },

//         [deleteProduct.pending]: (state) => {
//             state.deleteProductStatus = 'loading'
//         },

//         [deleteProduct.fulfilled]: (state, { payload} ) => {
//             state.deleteProductStatus = "complete"
//             const newState = state.products.filter(product => product.id !== payload.data.id)
//             state.products = newState
            

//         },
        
//         [deleteProduct.rejected]: (state) => {
//             state.deleteProductStatus = 'rejected'
//             state.message = "there was a problem"
//         },
//     }
// })

// export const {
//     clearAddProductStatus, 
//     clearUpdateProductStatus, 
//     clearDeleteProductStatus
// } = shopSlice.actions

// export const shopSelector = (state) => state.shop

// export default shopSlice.reducer