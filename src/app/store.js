import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/event/eventsSlice'
import shopReducer from '../features/shop/shopSlice'

export default configureStore({
  reducer: {
    events: eventsReducer,
    shop: shopReducer
  }
})