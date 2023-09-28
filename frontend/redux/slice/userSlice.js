import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, putUserName } from "../actions/userActions";

const initialState = {
  error: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getUserInfo, (state, action) => {
        state.firstName=action.payload.firstName; 
        state.lastName=action.payload.lastName; 
        state.userName=action.payload.userName; 
        state.error = null; 
        state.isAuthenticated = true
      })

      .addCase(putUserName, (state, action)=> {
        state.firstName=action.payload.firstName; 
        state.lastName=action.payload.lastName; 
        state.userName=action.payload.userName;
        state.error=null;
        state.isAuthenticated = true

      })
     
  },
});

export default userSlice;
