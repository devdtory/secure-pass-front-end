"use client";
import { AnimatePresence } from "framer-motion";
import Dialogue from "./Dialogue";
const page = () => {
  return (
    <AnimatePresence>
      <main className="flex h-full flex-col flex-1 items-center justify-center w-full bg-[#191919] overflow-y-scroll">
        <div
          className={`flex justify-center flex-col items-center px-16 py-5 pt-12 gap-2 relative w-[600px] h-[300px] `}
        >
          <h3 className="leading-6 font-bold text-[32px]">{"Good Habits"}</h3>
          <Dialogue/>
        </div>
      </main>
    </AnimatePresence>
  );
};

export default page;