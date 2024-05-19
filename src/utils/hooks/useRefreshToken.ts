"use client";

import { resolve } from "path";
import { axiosAuth } from "../api/axiosIntance";
import { rejects } from "assert";

export const useRefreshToken = () => {
  const refreshToken = async () => {
    const res = await axiosAuth.get("/auth/refresh");
    if (res.status === 200) {
      console.log("refresh token success");
      resolve("success");
    } else {
      console.log("refresh token failed");
      Promise.reject("failed");
    }
    
  };
  return refreshToken;
};
