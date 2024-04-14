"use client";
import Image from "next/image";
import React from "react";

const Device = ({ className, rightIcon = true }: any) => {
  return (
    <div
      className={`w-full h-[5.125rem] px-[2rem] py-[1rem] flex items-center justify-start rounded-[0.5rem] ${className}`}
    >
      <div className="flex items-center justify-center h-[50px] w-[50px] rounded-[30%] my-4 bg-[#fff]">
        {/* <Image
        src={"/assets/icons/empty/note.svg"}
        alt="item"
        width={40}
        height={40}
      /> */}
      </div>
      <p className="text-[#EFEFEF] tracking-[-0.005rem] text-[1rem] font-[500] leading-[1.5rem] min-w-[18rem] px-[1.5rem] py-[0.5rem] overflow-clip text-left">
        IOS • Apple iPhone 13 Pro
      </p>
      <p className="text-[#EFEFEF] tracking-[-0.005rem] text-[1rem] font-[500] leading-[1.5rem] min-w-[17rem] px-[1.5rem] py-[0.5rem] overflow-clip text-left">
        Berlin, Germany
      </p>
      <p className="text-[#EFEFEF] tracking-[-0.005rem] text-[1rem] font-[500] leading-[1.5rem] min-w-[14rem] px-[1.5rem] py-[0.5rem] overflow-clip text-left">
        January 30, 2023 | 12:56 PM
      </p>
      {rightIcon && (
        <div className="flex-1 flex items-center justify-end">
          <Image
            src={"/assets/icons/cross.svg"}
            width={16}
            height={16}
            alt="cross"
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Device;
