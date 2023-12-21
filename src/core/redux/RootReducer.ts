import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import cookiesSlice from './slices/cookiesSlice'
import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '@/features/auth/redux/slices/authSlice';
import cartSlice from '@/features/Cart/redux/slices/cartSlice';

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["cookies","auth","cart"],
  };

  let reducer = combineReducers({
    cookies: cookiesSlice,
    auth:authSlice,
    cart:cartSlice
  });
  
  export const rootReducer = persistReducer(persistConfig, reducer);