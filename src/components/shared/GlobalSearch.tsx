"use client";
import { useSearch } from "@/context/Searchcontext";
import React, { useEffect, useRef } from "react";
import OverLay from "./OverLay";
import { useHotkeys } from "react-hotkeys-hook";
import SearchIcon from "@heroicons/react/outline/SearchIcon";
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
    console.log("not available");
    setSearchOpen(false);
    document.body.style.overflow = "unset";
  };
  useHotkeys("esc", reset);
  useHotkeys("ctrl+k", openSearch);

  return (
    <>
      <OverLay isOpen={searchOpen} onClose={reset}>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-5 flex items-center">
            <SearchIcon
              className="h-5 w-5 text-[#CCCCCC] ml-1"
              aria-hidden="true"
            />
          </div>
          <input
            ref={inputRef}
            id="search"
            name="search"
            className="block w-full  border border-[#555555] rounded-t-md py-5 pl-14 pr-5 text-sm bg-[#1A1A1A] sm:text-sm placeholder-[#CCCCCC] text-[18px] border-b-1 border-none outline-none focus:ring-0"
            placeholder="Search Secure Passwords (⌘K)"
            type="search"
            onFocus={() => setSearchOpen(true)}
          />
        </div>
        
      </OverLay>
    </>
  );
};

export default GlobalSearch;
