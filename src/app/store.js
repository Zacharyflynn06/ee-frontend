import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/event/eventsSlice'
import shopReducer from '../features/shop/ShopSlice'
import userReducer from '../features/User/userSlice'

export default configureStore({
  reducer: {
    events: eventsReducer,
    shop: shopReducer,
    user: userReducer
  }
})