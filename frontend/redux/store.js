import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Importez le moteur de stockage que vous souhaitez utiliser
import userSlice from "./slice/userSlice";
import authSlice from "./slice/authSlice";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['auth'], 
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  auth: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Utilisez le rootReducer enveloppé avec persistReducer
  middleware: [thunk],
});

export const persistor = persistStore(store);

