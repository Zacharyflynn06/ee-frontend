import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: false
}

export const MenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleIsActive: (state) => {
            if(state.isActive === false) {
                state.isActive = true
            } else {
                state.isActive = false
            }
        }
    }
})

export const {toggleIsActive} = MenuSlice.actions

export const isActive = MenuSlice.actions

export default MenuSlice.reducer