import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, putUserName } from "../actions/userActions";

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

      .addCase(getUserInfo, (state, action) => {
        state.user.firstName=action.payload.firstName; 
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
