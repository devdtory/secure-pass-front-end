"use client";

import { createContext, useContext, useState } from "react";

const SearchContext = createContext<any>(null);
export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }: any) {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <SearchContext.Provider value={{ searchOpen, setSearchOpen }}>
      {children}
    </SearchContext.Provider>
  );
}
