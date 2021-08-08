import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/event/eventsSlice'
import shopReducer from '../features/shop/shopSlice'
import userReducer from '../features/Users/usersSlice'

export default configureStore({
  reducer: {
    events: eventsReducer,
    shop: shopReducer,
    user: userReducer
  }
})