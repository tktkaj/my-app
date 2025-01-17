import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requests: [],
};

const customHookSlice = createSlice({
  name: "customHook",
  initialState,
  reducers: {
    addRequest: (state, action) => {
      state.requests.push(action.payload);
    },
    removeLastRequest: (state) => {
      state.requests.pop();
    },
  },
});

export const { addRequest, removeLastRequest } = customHookSlice.actions;
export default customHookSlice.reducer;
