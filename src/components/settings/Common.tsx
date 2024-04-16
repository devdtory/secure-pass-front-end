import Image from "next/image";
import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <h2 className="w-full text-left text-[24px] leading-[30px] font-[400] pb-[18px]">
      {title}
    </h2>
  );
};

const Section = ({
  title,
  children,
  bgTransparent = false,
}: {
  title: string;
  children: React.ReactNode;
  bgTransparent?: boolean;
}) => {
  return (
    <div className={`w-full ${bgTransparent ? 'bg-transparent':'bg-[#151515]'}  rounded-[12px] p-[24px]`}>
      <Heading title={title} />
      {children}
    </div>
  );
};

const RowItem = ({
  title,
  middleText,
  rightContent,
}: {
  title: string;
  middleText?: string;
  rightContent?: React.ReactNode;
}) => {
  return (
    <div className="border-[2px] border-[#5A5A5A] flex justify-between items-center px-[24px] rounded-md min-h-[69px] w-full">
      <div className="flex xl:flex-row flex-col xl:items-center xl:justify-start items-start justify-center">
        <p className="text-[13px] leading-[16px] text-[#A0A0A0] font-500 min-w-[180px] xl:min-w-[210px] text-left">
          {title}
        </p>
        {middleText && (
          <p className="text-[14px] xl:text-[16px] leading-[24px] text-[#EFEFEF] font-500 flex-1 text-left flex-wrap xl:mr-0 mr-[5px]">
            {middleText}
          </p>
        )}
      </div>
      {rightContent}
    </div>
  );
};
export { Heading, Section, RowItem };
