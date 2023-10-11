import { createSlice } from "@reduxjs/toolkit";
import { loginUserSuccess, loginUserFailure, logoutUser } from "../actions/authActions";

const initialState = {
    error: null,
    isAuthenticated: false,
    token: null,
};



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loginUserSuccess, (state, action) => {
          state.error = null;
          state.isAuthenticated = true
          state.token= action.payload.body.token
        })
        .addCase(loginUserFailure, (state, action) => {
          state.error = action.payload;
          state.token = null;
        })
        .addCase(logoutUser, (state) => {
          state.error = null; 
          state.isAuthenticated = false
          state.token = null;
        })
       
    },
  });
  
  export default authSlice;