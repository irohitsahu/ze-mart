import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: string | null;
  username: string | null;
};

const initialState: AuthState = {
  accessToken: null,
  username: null,
};

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<Partial<AuthState>>) => {
      if (action.payload.accessToken) {
        state.accessToken = action.payload.accessToken;
      }
      if (action.payload.username) {
        state.username = action.payload.username;
      }
    },
    clearUserAuth: (state) => {
      state.accessToken = null;
      state.username = null;
    },
  },
});

export const { setUserAuth, clearUserAuth } = authSlice.actions;

export default authSlice.reducer;
