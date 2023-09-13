import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import { NextRouter } from "next/router";
import instance from "../../configs/axios";
import { IRegister } from "./types";
import { AUTH_ACTIONS } from "../../store/auth";
import { store } from "../../store";


export const signIn = createAsyncThunk(
  "signIn",
  async (params: { email?: string; password?: string }, { rejectWithValue }) => {
    try {
      const { email = "", password = "" } = params;

      const formdata = new FormData();

      formdata.append("username", email);
      formdata.append("password", password);

      const isHasToken = localStorage.getItem("access_token");

      const options: AxiosRequestConfig = isHasToken
        ? { url: `/site/me`, method: "GET" }
        : { url: `/login`, method: "POST", data: formdata };

      const response = await instance(options);

      if (response?.status !== 200) return rejectWithValue(new Error("Authorization error!"));

      if (!isHasToken) {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
      }

      return {
        roles: response?.data
      };
    } catch (error: any) {
      console.log("error  -----");

      return rejectWithValue(error?.response);
    }
  }
);

export const signUp = createAsyncThunk("signUp", async (params: IRegister | undefined, { rejectWithValue }) => {
  try {
    const options: AxiosRequestConfig = { url: `auth/jwt/register-with-phone`, method: "POST", data: params };

    const response = await instance(options);

    if (response?.status !== 200) return rejectWithValue(new Error("Authorization error!"));

    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    localStorage.removeItem("user");
    localStorage.removeItem("secret");

    return {
      roles: response.data.roles,
    };
  } catch (error: any) {
    if (typeof error?.response?.data?.detail === "string") {
      // message.error(error?.response?.data?.detail)
    }
    return rejectWithValue(error?.response);
  }
});

export const signOut = async (router: NextRouter) => {
  const response = await instance({ url: "users/logout", method: "GET" });

  if (response?.status === 200) {
    store.dispatch(AUTH_ACTIONS.signOut());
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    router.push("/auth/signin");
  }
};

export const refreshToken = async () => {
  try {
    const my_refresh_token = localStorage.getItem("refresh_token");
    if (my_refresh_token) {
      const response = await instance({
        url: "/auth/jwt/refresh",
        method: "POST",
        data: { refresh_token: my_refresh_token },
      });
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access_token);
        store.dispatch(signIn({}));
        // localStorage.setItem('refresh_token', response.data.refresh_token);
      }
    }
  } catch (error) {
    window.location.href = "/auth/signin";
  }
};
