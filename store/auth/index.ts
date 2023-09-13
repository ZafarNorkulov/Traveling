import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../../components/auth/service.request";

export interface IAuth {
  isLoading: boolean;
  status: "pending" | "success" | "error";
  isAuthenticated: boolean;
}

const initialState: IAuth = {
  isLoading: false,
  status: "success",
  isAuthenticated: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      state.isAuthenticated = false;
      state.status = "success";
    },
  },
  extraReducers: (building) => {
    building
      // sign in
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.status = "pending";
      })
      .addCase(signIn.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false;
        state.status = "error";
      })
      // sign up
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.status = "pending";
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state) => {
        state.isLoading = false;
        state.status = "error";
      });
  },
});
export const AUTH_ACTIONS = authSlice.actions;
export default authSlice;
