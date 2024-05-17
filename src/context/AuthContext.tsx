"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <SessionProvider>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
      </AuthContext.Provider>
    </SessionProvider>
  );
}
