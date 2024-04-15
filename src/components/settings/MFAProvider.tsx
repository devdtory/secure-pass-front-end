"use client";
import Image from "next/image";
import React from "react";
import { SecondaryButton } from "../shared/Buttons";

const MFAProvider = ({
  provider,
  description,
  status,
  onClick,
  icon
}: {
  provider: string;
  description: string;
  status: string;
  onClick: () => void;
  icon: string;
}) => {
  return (
    <div className="w-full px-[1rem] py-[0.75rem] flex justify-between items-center gap-x-[3.75rem] font-[500]">
      <Image
        src={icon}
        width={40}
        height={40}
        alt={provider}
      />
      <h3 className="w-[11.0625rem] overflow-wrap text-left items-center flex leading-[1.5rem] text-[1rem] text-[#ffffff] tracking-[-0.005rem]">
        {provider}{" "}
      </h3>
      <p className="w-[24.25rem] text-left leading-[1.3125rem] text-[0.875rem] text-[#CCCCCC] tracking-[-0.00438rem]">
        {description}
      </p>
      <SecondaryButton
        title={`${status === "active" ? "Active" : "+ Add"}`}
        onClick={onClick}
        width={"120px"}
        // disabled={status === "active"}
        className={` !font-[500] !text-[1rem] 1leading-[1.5rem] ${status==='active' ? '!border-[#2ED370] !text-[#2ED370]':'!border-[#A0A0A0] !text-[#A0A0A0]'} !border-[2px]`}
      />
    </div>
  );
};

export default MFAProvider;
