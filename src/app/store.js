import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice";
import usersReducer from "../feature/users/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
