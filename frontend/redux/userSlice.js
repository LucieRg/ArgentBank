import { createSlice } from "@reduxjs/toolkit";
import { loginUserSuccess, loginUserFailure, logoutUser, getUserInfo, putUserName } from "../redux/userActions";

const initialState = {
  user: {},
  error: null,
  isAuthenticated: false,
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
      .addCase(getUserInfo, (state, action) => {
        console.log(state.user);
        state.user =action.payload; 
        state.error = null; 
        state.isAuthenticated = true
      })

      .addCase(putUserName, (state, action)=> {
        state.user=action.payload;
        state.error=null;
        state.isAuthenticated = true

      })
     
  },
});

export default userSlice;
