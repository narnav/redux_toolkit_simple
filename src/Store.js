import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import loggedReducer from './loggedSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    logged: loggedReducer,
  },
});
