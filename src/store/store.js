import { configureStore } from "@reduxjs/toolkit";
import { postApi } from '../services/postApi';
import authReducer from "./reduserc/auth";


export const store = configureStore({
  reducer: {
  auth: authReducer,
  [postApi.reducerPath]: postApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),

});
