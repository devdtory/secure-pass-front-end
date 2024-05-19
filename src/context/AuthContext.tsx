"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import useAxiosAuth from "@/utils/hooks/useAxiosAuth";
import { URLConstants } from "@/utils/constants/urls";
import { redirect } from "next/navigation";
export const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const axiosAuth = useAxiosAuth();
  const checkAuthState = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isAuthenticated && isLoggedIn) {
      axiosAuth.get(URLConstants.getStatus()).then((res) => {
        console.log({ checkedStatus: res });
        if (res.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          redirect("/login");
        }
      });
    }
  };
  useEffect(() => {
    checkAuthState();
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
