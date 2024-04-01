"use client"
import { useEffect } from "react";

export default function Home() {
  const keyDownHandler = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.ctrlKey && event.key === "k") {
      console.log("You just pressed Control and K!");
    }
  };
  
  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
