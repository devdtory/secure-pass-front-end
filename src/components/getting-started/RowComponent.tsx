import Image from "next/image";
import React from "react";

const RowComponent = ({
  icon,
  title,
  description,
  rightText,
  action,
  isBottomBorder,
}: {
  icon: string;
  title: string;
  description: string;
  rightText: string;
  action: () => void;
  isBottomBorder: number | string;
}) => {
  console.log("RowComponent",isBottomBorder);
  return (
    <div
      className={`py-[24px] w-full ${
        isBottomBorder  && "border-b-[1px] border-b-[#333333]"
      }`}
    >
      <div className="w-full min-h-[65px] flex justify-between items-center">
        <div className="flex justify-start items-center h-full">
          <Image src={`${icon}`} alt="step-1" width={65} height={65} />
          <div className="flex flex-col justify-between items-start flex-1 h-full pl-4">
            <h3 className="text-[#ffffff] text-[18px] font-[600] leading-[22px] pt-2">
              {title}
            </h3>
            <p className="text-[#CCCCCC] text-[16px] font-[400] leading-[24px] pb-2">
              {description}
            </p>
          </div>
        </div>
        <div
          className="flex justify-end items-center gap-x-2 cursor-pointer h-full"
          onClick={action}
        >
          <p className="text-[#ffffff] text-[16px] ml-4 leading-[24px]">
            {rightText}
          </p>
          <Image
            src="/assets/icons/right-arrow.svg"
            alt="arrow-right"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default RowComponent;
