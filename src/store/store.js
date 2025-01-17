import { configureStore } from "@reduxjs/toolkit";
import customHookReducer from './customHookSlice';
const store = configureStore({
    reducer: {
      customHook: customHookReducer,
    },
  });
  export default store;