import { createSlice } from "@reduxjs/toolkit";
import { loginUserSuccess, loginUserFailure } from "../redux/userActions";

const initialState = {
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserSuccess, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUserFailure, (state, action) => {
        state.user = null;
        state.error = action.payload;
      });
  },
});

export default userSlice;
