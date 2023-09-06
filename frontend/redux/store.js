import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "../redux/userSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
  }),
  middleware: [thunk],
});

export default store;
