import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    hasErrors: false,
    products: []
}

export const getProducts = createAsyncThunk(
    'shop/getProducts',
    async () => {
        return fetch('http://localhost:3001/products')
        .then(res => res.json())
    }
)
export const shopSlice = createSlice({
    name: 'Shop',
    initialState,
    reducers: {
  

          
    },


    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = "true"
        },

        [getProducts.fulfilled]: (state, { payload} ) => {
            debugger
         
           console.log('payload', payload)
       },

       [getProducts.rejected]: (state, { payload} ) => {
        debugger
     
       console.log('payload', payload)
   }
    }


})



export default shopSlice.reducer