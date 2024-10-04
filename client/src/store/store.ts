import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../service/authApi";
import { userApi } from "../service/userApi";
import authSliceReducer from "./slice/authSlice";
import userSliceReducer from "./slice/userSLice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userAuth: authSliceReducer,
    userData: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
