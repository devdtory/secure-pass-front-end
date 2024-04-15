"use client";

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext<any>(null);


export function AuthProvider({ children }: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
