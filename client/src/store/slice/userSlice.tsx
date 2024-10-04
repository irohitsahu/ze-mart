import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: {
    user: null,
  },
  reducers: {
    setUserState: (state, action) => {
      state.user = action.payload;
    },
    clearUserState: (state) => {
      state.user = null;
    },
  },
});

export const { setUserState, clearUserState } = userSlice.actions;

export default userSlice.reducer;
