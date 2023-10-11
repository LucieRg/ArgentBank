import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, putUserName } from "../actions/userActions";

const initialState = {
  error: null,
  firstName: null,
  lastName: null,
  userName:null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getUserInfo, (state, action) => {
        state.firstName=action.payload.firstName; 
        state.lastName=action.payload.lastNAme; 
        state.userName=action.payload.userName; 
        state.error = null; 

      })

      .addCase(putUserName, (state, action)=> {
        state.firstName=action.payload.firstName; 
        state.lastName=action.payload.lastNAme; 
        state.userName=action.payload.userName;
        state.error=null;

      })
     
  },
});

export default userSlice;
