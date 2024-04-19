"use client";
import Image from "next/image";
import React from "react";

const PasswordItem = () => {
  return (
    <div className="w-full flex justify-start items-center py-[1rem] h-[4.5rem]">
      <div className="flex items-center justify-center h-[40px] w-[40px] rounded-[30%] my-4 bg-[#fff] flex-shrink-0 shrink-0">
        {/* <Image
        src={"/assets/icons/empty/note.svg"}
        alt="item"
        width={40}
        height={40}
      /> */}
      </div>
      <p className="text-[#EFEFEF] tracking-[-0.005rem] text-[1rem] font-[500] leading-[1.5rem] w-[11rem] xl:w-[22rem] px-[0.75rem] py-[0.5rem] overflow-clip">
        Telegram
      </p>
      <div className="flex items-center p-0 gap-x-[0.5rem] mr-[1rem] xl:mr-0">
        <Image
          src={"/assets/icons/tools/alert.svg"}
          alt="item"
          width={24}
          height={24}
          className="flex-shrink-0 shrink-0"
        />
        <p className="text-[#B9B9B9] tracking-[-0.00438rem] text-[0.875rem] font-[500] leading-[1.3125rem]">
          Extremely Weak
        </p>
      </div>
      <div className="flex gap-x-[0.5rem] items-center h-full flex-1 justify-end">
        <button className="flex items-center justify-center rounded-[0.25rem]  h-[2.5rem] px-[2rem] border-[#A0A0A0] border-[2px] gap-x-[0.5rem]">
          <Image
            src={"/assets/icons/tools/fix.svg"}
            alt="fix"
            width={18}
            height={18}
          />
          <p className="text-[#A0A0A0] tracking-[-0.005rem] text-[1rem] font-[500] leading-[1.5rem] flex-shrink-0 shrink-0">
            Fix Password
          </p>
        </button>
        <button className="flex items-center justify-center rounded-[0.25rem] w-[2.5rem] h-[2.5rem]  border-[#A0A0A0] border-[2px]">
          <Image
            src={"/assets/icons/tools/reset.svg"}
            alt="delete"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default PasswordItem;
