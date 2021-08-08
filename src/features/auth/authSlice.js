import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authChecked: false,
    loggedIn: false,
    currentUser: {},
    cart:[]
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticated: (state, action) => {
            state = {
                authChecked: true,
                loggedIn: true,
                currentUser: action.payload
            }
        },

        not_authenticated: (state, action) => {
            state = {
                authChecked: true,
                loggedIn: false,
                currentUser: {}
            }
        }


    }
})

export default authSlice.reducer