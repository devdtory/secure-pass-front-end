"use client";
import Image from "next/image";
import React from "react";
type Props = {
  title: string;
  value: number;
  color: string;
  icon: string;
};
const PasswordBox = ({ title, value, color, icon }: Props) => {
  return (
    <div className="w-full h-[4.6875rem] flex-shrink px-[1rem] py-[0.75rem] bg-[#1A1A1A] rounded-[0.5rem] flex items-center gap-x-[0.75rem] cursor-pointer">
      <div
        style={{
          backgroundColor: color,
        }}
        className={`w-[3.125rem] h-[3.125rem] shrink-0 rounded-full justify-center items-center flex`}
      >
        <Image src={icon} alt="cross" width={30} height={30} />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start ">
        <h5 className="text-[#CCCCCC] text-[0.75rem] font-[700] tracking-[0.075rem] uppercase p-0 font-generalSans">
          {title}
        </h5>
        <div className="flex justify-between items-center w-full">
          <h5 className="text-[#eeeeee] text-[1.25rem] font-[600] p-0 w-full">
            {value}
          </h5>
          <Image
            src={`/assets/icons/right-arrow.svg`}
            alt="arrow-right"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordBox;
