'use client'
import { useSearch } from "@/context/Searchcontext";
import React, { useEffect, useRef } from "react";
import OverLay from "./OverLay";
import { useHotkeys } from "react-hotkeys-hook";
const GlobalSearch = () => {
  const { searchOpen, setSearchOpen } = useSearch();
  const inputRef = useRef<null | HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, [searchOpen]);
  const openSearch = () => {
    setSearchOpen(true);
    document.body.style.overflow = "hidden";
    inputRef?.current?.focus();
  };
  const reset = () => {
    console.log('not available')
    setSearchOpen(false);
    document.body.style.overflow = "unset";
  };
  useHotkeys("esc", reset);
  useHotkeys('ctrl+k', openSearch);

  return (
    <>
      <OverLay isOpen={searchOpen} onClose={reset}>
        <p>Search powered</p>
        <input type="text" ref={inputRef} />
      </OverLay>
    </>
  );
};

export default GlobalSearch;
