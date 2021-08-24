import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: false
}

export const MenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleIsActive: (state) => {
            state.isActive = !state.isActive
        }
    }
})

export const menuSelector = (state) => state.menu

export default MenuSlice.reducer