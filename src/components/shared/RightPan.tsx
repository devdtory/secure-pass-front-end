"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideAnimation } from "@/utils/motion";
import Image from "next/image";
const RightPan = ({
  children,
  isOpen,
  onClose,
  title,
  width = "400px",
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  width?: string;
}) => {
  return (
    <motion.div
      onClick={onClose}
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0  h-full ml-auto bg-[#000000aa] w-screen
       z-50 
      `}
    >
      {isOpen && (
        <motion.div
          style={{ width: width }}
          {...slideAnimation("right", 0)}
          onClick={(e) => e.stopPropagation()}
          className="h-full flex flex-col justify-start items-start  bg-[#202020] ml-auto"
        >
          <div className="flex justify-between items-center  w-full  py-[2.62rem] px-[2rem] border-b-[0.0625rem] border-b-[#5A5A5A]">
            <p className="font-[700] text-[1.5rem] ">{title}</p>
            <button onClick={onClose}>
              <Image
                src={"/assets/icons/cross.svg"}
                alt="cross"
                width={20}
                height={20}
              />
            </button>
          </div>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default RightPan;
