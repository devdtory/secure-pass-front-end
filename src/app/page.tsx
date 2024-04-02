"use client";
import RightPan from "@/components/shared/RightPan";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const keyDownHandler = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.ctrlKey && event.key === "k") {
      console.log("You just pressed Control and K!");
    }
  };
  const openRightPanel = () => {
    setIsOpen(true);
  };
  const closeRightPanel = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
  });
  return (
    <>
      <main className="flex h-full flex-col flex-1 items-center justify-between w-full bg-[#191919] overflow-y-scroll">
        Hello
        <button onClick={openRightPanel}>Open Right Panel</button>

      </main>
      <RightPan
        isOpen={isOpen}
        title="Add a password"
        onClose={closeRightPanel}
      >
        <div className="w-full h-full bg-fray-200"></div>
      </RightPan>
    </>
  );
}
