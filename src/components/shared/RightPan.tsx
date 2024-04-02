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
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
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
          {...slideAnimation("right")}
          className="h-full flex flex-col justify-start items-start w-[400px] bg-[#202020] ml-auto"
        >
          <div className="flex justify-between items-center  w-full   py-6 px-4">
            <p className="font-[700] text-[24px]">{title}</p>
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
