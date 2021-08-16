import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/event/EventSlice'
import shopReducer from '../features/shop/ShopSlice'
import userReducer from '../features/User/userSlice'

export default configureStore({
  reducer: {
    eventReducer: eventsReducer,
    shop: shopReducer,
    user: userReducer
  }
})