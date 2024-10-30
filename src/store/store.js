import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../appSlice/authSlice';
import todoReducer from "../appSlice/todoSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer

  },
});

export default store;