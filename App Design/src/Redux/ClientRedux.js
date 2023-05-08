import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    currentClient: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentClient = action.payload;
    },
    loginFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {loginStart, loginSuccess, loginFail} = clientSlice.actions;
export default clientSlice.reducer;
