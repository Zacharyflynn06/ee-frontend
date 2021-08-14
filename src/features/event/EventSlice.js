import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getEvents = createAsyncThunk(
    'event/getEvents',
    async () => {
        return fetch('http://localhost:3001/events')
        .then(res => res.json())
    }
)

export const addEvent = createAsyncThunk(
    'event/addEvent',
    async (eventData) => {
        debugger
        return fetch(
            'http://localhost:3001/events', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: eventData
            }
        )
        .then(res => res.json())
    }
)

export const initialState = {
    status: null,
    events: []
}

export const EventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getEvents.pending]: (state) => {
            state.status = "loading"
        },

        [getEvents.fulfilled]: (state, { payload} ) => {
            state.status = "successs"
            state.events = payload.data
            console.log('payload', payload)
        },
        
        [getEvents.rejected]: (state, { payload} ) => {
            state.status = "rejected"
     
            console.log('payload', payload)
        },

        [addEvent.pending]: (state) => {
            state.status = "loading"
        },

        [addEvent.fulfilled]: (state, { payload} ) => {
            state.status = "successs"
            state.events = state.events.concat([payload.data])
            console.log('payload', payload)
        },
        
        [addEvent.rejected]: (state, { payload} ) => {
            state.status = "rejected"
     
            console.log('payload', payload)
        },
    }
    
})

export const selectEvents = (state) => state.events.events

export default EventSlice.reducer;