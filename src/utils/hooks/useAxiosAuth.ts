"use client";

import { useEffect } from "react";
import { axiosAuth } from "../api/axiosIntance";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosAuth = () => {
  const refreshToken = useRefreshToken();

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log("error in interceptor", error);
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          console.log("401 error in interceptor");
          prevRequest.sent = true;
          try {
            await refreshToken();
          } catch (e) {
            return Promise.reject(error);
          }
          return axiosAuth(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return axiosAuth;
};

export default useAxiosAuth;
