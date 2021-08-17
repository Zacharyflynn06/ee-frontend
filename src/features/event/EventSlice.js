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

export const deleteEvent= createAsyncThunk(
    'event/DeleteEvent',
    async (event, thunkAPI) => {
        const parsedId = parseInt(event.id)
        const response = await fetch(
            `http://localhost:3001/events/${parsedId}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                }
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
            
        },
        
        [updateEvent.rejected]: (state, { payload} ) => {

            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.status.message;
        },

        [deleteEvent.pending]: (state) => {
            state.isFetching = true
        },

        [deleteEvent.fulfilled]: (state, { payload} ) => {
            
            const event = state.events.find(event => event.id === payload.data.id)
            state.events -= event
            state.isFetching = false
            state.isSuccess = true
        },
        
        [deleteEvent.rejected]: (state, { payload} ) => {

            state.isFetching = false;
            state.isError = true;
            state.errorMessage = "there was a problem"
        },
    }
    
})

export const { clearState } = EventSlice.actions
export const eventSelector = (state) => state.event

export const selectEvents = (state) => state.event.events


export const selectEventById = (state, eventId) => {
    debugger
    state.eventReducer.events.find(event => event.id === eventId)
    
}

export default EventSlice.reducer;