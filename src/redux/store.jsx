import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import { apistore } from "./apis/apistore";

const store = configureStore({
  reducer: {
    user: userReducer,
    [apistore.reducerPath]: apistore.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apistore.middleware),
  devTools: true,
});
export default store;
