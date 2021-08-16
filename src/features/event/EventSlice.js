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

export const updateEvent = createAsyncThunk(
    'event/updateEvent',
    async (eventData) => {   
        debugger     
        const parsedId = parseInt(eventData.id)
        return fetch(
            `http://localhost:3001/events/${parsedId}`, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                },
                body: eventData.data
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
    name: 'event',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getEvents.pending]: (state) => {
            state.status = "loading"
        },

        [getEvents.fulfilled]: (state, { payload} ) => {
            state.status = "complete"
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
            state.status = "complete"
            state.events = state.events.concat([payload.data])
            console.log('payload', payload)
        },
        
        [addEvent.rejected]: (state, { payload} ) => {
            state.status = "rejected"
     
            console.log('payload', payload)
        },

        [updateEvent.pending]: (state) => {
            state.status = "loading"
        },

        [updateEvent.fulfilled]: (state, { payload} ) => {
            debugger
            state.status = "complete"
            const event = state.events.find(event => event.id === payload.data.id)
            event.attributes = payload.data.attributes
            console.log('payload', payload)
        },
        
        [updateEvent.rejected]: (state, { payload} ) => {
            state.status = "rejected"
     
            console.log('payload', payload)
        },
    }
    
})

export const selectEvents = (state) => state.event.events
export const selectStatus = (state) => state.event.status

export const selectEventById = (state, eventId) => {
    debugger
    state.event.events.find(event => event.id === eventId)
    
}

export default EventSlice.reducer;