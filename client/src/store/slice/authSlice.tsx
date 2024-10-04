import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: string | null;
};

const initialState: AuthState = {
  accessToken: null,
};

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<Partial<AuthState>>) => {
      if (action.payload.accessToken) {
        state.accessToken = action.payload.accessToken;
      }
    },
    clearUserAuth: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setUserAuth, clearUserAuth } = authSlice.actions;

export default authSlice.reducer;
