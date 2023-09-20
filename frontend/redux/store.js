import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import authSlice from "./slice/authSlice";
import thunk from "redux-thunk";


const store = configureStore({
  reducer: combineReducers({
    user: authSlice.reducer,
    auth: userSlice.reducer,
  }),
  middleware: [thunk],
});

export default store;
