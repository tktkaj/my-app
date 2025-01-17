import { configureStore } from "@reduxjs/toolkit";
import customHookReducer from './customHookSlice';
import userInfoReducer from './userInfoSlice';

const store = configureStore({
    reducer: {
      customHook: customHookReducer,
      userInfo: userInfoReducer, 
    },
  });
  export default store;