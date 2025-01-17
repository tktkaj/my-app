import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requests: [],
};

const customHookSlice = createSlice({
  name: "pageHook",
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
