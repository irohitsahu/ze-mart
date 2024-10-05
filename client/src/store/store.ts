import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../service/authApi";
import { userApi } from "../service/userApi";
import { itemApi } from "../service/itemApi";
import authSliceReducer from "./slice/authSlice";
import userSliceReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [itemApi.reducerPath]: itemApi.reducer,
    userAuth: authSliceReducer,
    userData: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      itemApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
