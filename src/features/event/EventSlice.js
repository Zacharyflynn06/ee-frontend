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
    async (eventData, thunkAPI) => {
        // debugger
        const response = await fetch(
            'http://localhost:3001/events', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: eventData
            }
        )
        let data = await response.json()
        console.log('response', data)
        if(response.ok) {
            return data
        } else {
            return thunkAPI.rejectWithValue(data)
        }
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

const initialState = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    events: []
}

export const EventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state
        }
    },
    extraReducers: {
        [getEvents.pending]: (state) => {
            state.isFetching = true
        },

        [getEvents.fulfilled]: (state, { payload} ) => {
            state.isFetching = false
            state.isSuccess = true
            state.events = payload.data
        },
        
        [getEvents.rejected]: (state, { payload} ) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.status.message;
        },

        [addEvent.pending]: (state) => {
            state.isFetching = true
        },

        [addEvent.fulfilled]: (state, { payload} ) => {
            state.isFetching = false
            state.isSuccess = true
            state.events = state.events.concat([payload.data])
            console.log('payload', payload)
        },
        
        [addEvent.rejected]: (state, { payload} ) => {
            
            state.status = "rejected"
     
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload
        },

        [updateEvent.pending]: (state) => {
            state.isFetching = true
        },

        [updateEvent.fulfilled]: (state, { payload} ) => {
            debugger
            state.isFetching = false
            state.isSuccess = true
            const event = state.events.find(event => event.id === payload.data.id)
            event.attributes = payload.data.attributes
            console.log('payload', payload)
        },
        
        [updateEvent.rejected]: (state, { payload} ) => {

            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.status.message;
        },
    }
    
})

export const {clearState} = EventSlice.actions
export const eventSelector = (state) => state.eventReducer

export const selectEvents = (state) => state.eventReducer.events
export const selectStatus = (state) => state.eventReducer.status

export const selectEventById = (state, eventId) => {
    debugger
    state.eventReducer.events.find(event => event.id === eventId)
    
}

export default EventSlice.reducer;