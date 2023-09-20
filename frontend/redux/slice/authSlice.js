import { createSlice } from "@reduxjs/toolkit";
import { loginUserSuccess, loginUserFailure, logoutUser } from "../actions/authActions";

const initialState = {
    user: {},
    error: null,
    isAuthenticated: false,
};



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(loginUserSuccess, (state, action) => {
          state.user = action.payload;
          state.error = null;
          state.isAuthenticated = true
        })
        .addCase(loginUserFailure, (state, action) => {
          state.user = null;
          state.error = action.payload;
        })
        .addCase(logoutUser, (state) => {
          state.user =null; 
          state.error = null; 
          state.isAuthenticated = false
        })
       
    },
  });
  
  export default authSlice;