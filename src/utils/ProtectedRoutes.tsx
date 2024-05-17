"use client";
import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { useSession } from "next-auth/react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactElement;
}) {
  const { isAuthenticated } = useContext(AuthContext);
  const { data: session } = useSession();

  useEffect(() => {
    if (session === null) {
      return redirect("/login");
    }
  }, [isAuthenticated]);

  if (session === null) {
    return null;
  }

  return children;
}
