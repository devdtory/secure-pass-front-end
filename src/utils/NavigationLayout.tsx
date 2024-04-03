'use client';
import GlobalSearch from "@/components/shared/GlobalSearch";
import Nav from "@/components/shared/Nav";
import SideNavigation from "@/components/shared/SideNavigation";
import { AuthContext } from "@/context/AuthContext";
import { SearchProvider } from "@/context/Searchcontext";
import React, { useContext } from "react";

const NavigationLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {isAuthenticated ? (
        <div className="">
          <SearchProvider>
            <Nav />
            <GlobalSearch />
          </SearchProvider>
          <main
            className={`w-full flex flex-row relative`}
            style={{ height: "calc(100vh - 82px)" }}
          >
            <SideNavigation />
            <div className="w-full">{children}</div>
          </main>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default NavigationLayout;
