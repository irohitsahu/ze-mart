import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../service/authApi";
import { userApi } from "../service/userApi";
import accessTokenReducer from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userAuth: accessTokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
