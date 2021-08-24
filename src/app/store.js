import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/event/EventSlice'
import shopReducer from '../features/shop/ShopSlice'
import userReducer from '../features/User/userSlice'
import menuReducer from '../features/menu/MenuSlice'

export default configureStore({
  reducer: {
    event: eventsReducer,
    shop: shopReducer,
    user: userReducer,
    menu: menuReducer
  }
})