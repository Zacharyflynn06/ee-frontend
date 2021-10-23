// import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getToken } from "../User/userSlice";


// export const getEvents = createAsyncThunk(
//     'event/getEvents',
//     async (thunkAPI) => {
//         const response = await fetch('http://localhost:3001/events')
//         const data = await response.json()
//         if(response.ok) {
//             return data
//         } else {
//             return thunkAPI.rejectWithValue(data)
//         }
//     }
// )

// export const addEvent = createAsyncThunk(
//     'event/addEvent',
//     async (eventData, thunkAPI) => {
//         // debugger
//         const response = await fetch(
//             'http://localhost:3001/events', {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json",
//                     Authorization: getToken()
//                 },
//                 body: eventData
//             }
//         )
//         let data = await response.json()
//         console.log('response', data)
//         if(response.ok) {
//             return data
//         } else {
//             return thunkAPI.rejectWithValue(data)
//         }
//     }
// )

// export const updateEvent = createAsyncThunk(
//     'event/updateEvent',
//     async (eventData, thunkAPI) => {   
             
//         const parsedId = parseInt(eventData.id)
//         const response = await fetch(
//             `http://localhost:3001/events/${parsedId}`, {
//                 method: "PATCH",
//                 headers: {
//                     Accept: "application/json",
//                 },
//                 body: eventData.data
//             }
//         )
//         const data = await response.json()
//         if(response.ok) {
//             return data
//         } else {
//             return thunkAPI.rejectWithValue(data)
//         }
//     }
// )

// export const deleteEvent= createAsyncThunk(
//     'event/DeleteEvent',
//     async (event, thunkAPI) => {
//         const parsedId = parseInt(event.id)
//         const response = await fetch(
//             `http://localhost:3001/events/${parsedId}`, {
//                 method: "DELETE",
//                 headers: {
//                     Accept: "application/json",
//                 }
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

// const initialState = {
//     getEventsStatus: 'idle',
//     addEventStatus: 'idle',
//     updateEventStatus: 'idle',
//     deleteEventStatus: 'idle',
//     message: '',
//     events: []
// }

// export const EventSlice = createSlice({
//     name: 'event',
//     initialState,
//     reducers: {
//         clearAddEventStatus: (state) => {
//             state.addEventStatus = 'idle'
//         },
        
//         clearUpdateEventStatus: (state) => {
//             state.updateEventStatus = 'idle'
//         },
//         clearDeleteEventStatus: (state) => {
//             state.deleteEventStatus = 'idle'
//         }
//     },
//     extraReducers: {
//         [getEvents.pending]: (state) => {
//             state.getEventsStatus = "loading"
//         },

//         [getEvents.fulfilled]: (state, { payload} ) => {
//             state.getEventsStatus = "complete"
//             state.events = payload.data
//         },
        
//         [getEvents.rejected]: (state, { payload} ) => {
//             state.getEventsStatus = "rejected"
//             // state.message = payload.status.message;
//         },

//         [addEvent.pending]: (state) => {
//             state.addEventStatus = "loading"
//         },

//         [addEvent.fulfilled]: (state, { payload} ) => {
//             state.addEventStatus = "complete"
//             state.events = state.events.concat([payload.data])
//             console.log('payload', payload)
//         },
        
//         [addEvent.rejected]: (state, { payload} ) => {
            
//             debugger
//             state.addEventStatus = "rejected"
//             state.message = payload
//         },

//         [updateEvent.pending]: (state) => {
//             state.updateEventStatus = "loading"
//         },

//         [updateEvent.fulfilled]: (state, { payload} ) => {
            
//             state.updateEventStatus = "complete"
//             const event = state.events.find(event => event.id === payload.data.id)
//             event.attributes = payload.data.attributes
            
//         },
        
//         [updateEvent.rejected]: (state, { payload} ) => {

//             state.updateEventStatus = "rejected"
//             state.message = payload
//         },

//         [deleteEvent.pending]: (state) => {
//             state.deleteEventStatus = "loading"
//         },

//         [deleteEvent.fulfilled]: (state, {payload}) => {
//             state.deleteEventStatus = "complete"
//             const newState = state.events.filter(event => event.id !== payload.data.id)
//             state.events = newState
//         },
        
//         [deleteEvent.rejected]: (state, ) => {

//             state.deleteEventStatus = "rejected"
//             state.message = "there was a problem"
//         },
//     }
    
// })

// export const { clearState, clearAddEventStatus, clearUpdateEventStatus, clearDeleteEventStatus } = EventSlice.actions
// export const eventSelector = (state) => state.event

// export const selectEvents = (state) => state.event.events


// export const selectEventById = (state, eventId) => {
//     debugger
//     state.eventReducer.events.find(event => event.id === eventId)
    
// }

// export default EventSlice.reducer;