import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const appSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    },
    logout: (state) => {
      state.token = null,
      state.user = null
    },
  },
});

export const { setAuth, logout } = appSlice.actions;
export default appSlice.reducer;
