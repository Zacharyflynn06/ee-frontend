import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    hasErrors: false,
    events: []
}

export const EventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.events += action.payload
        }
    }
})

export default EventSlice.reducer;