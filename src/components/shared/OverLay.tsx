"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeAnimation } from "@/utils/motion";
import Image from "next/image";
const OverLay = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  return (
    <div
      className={`fixed inset-0 p-10 flex items-center justify-center
    ${isOpen ? "block" : "hidden"} z-50 bg-gray-950/[.90]
    `}
      onClick={onClose}
    >
      {isOpen && (
        <motion.div
          {...fadeAnimation(1)}
          className="bg-[#202020] relative w-1/2 min-h-2/3 h-2/3 overflow-y-scroll overflow-hidden  shadow-lg border-2 rounded-lg border-none "
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-5 right-6 text-gray-300 z-50"
            onClick={onClose}
          >
            <Image
              src={"/assets/icons/cross.svg"}
              alt="cross"
              width={16}
              height={16}
              className="z-50"
            />
          </button>
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default OverLay;
