import { createSlice } from "@reduxjs/toolkit";

export const AuthReducer = createSlice({
  name: "auth",
  initialState: {
    auth: null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.auth = action.payload;
    },
  },
});
export const { setUserInfo }:any = AuthReducer.actions;
export default AuthReducer.reducer;
