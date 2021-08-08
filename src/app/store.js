import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  
})


const store = configureStore({
  rootReducer
})

export default store