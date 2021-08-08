import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/event/eventsSlice'

export default configureStore({
  reducer: {
    events: eventsReducer
  }
})