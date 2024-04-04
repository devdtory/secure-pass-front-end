import Image from "next/image";
import React from "react";
import { PrimaryButton, SecondaryButton } from "./Buttons";

const EmptySection = ({
  primaryButton,
  secondaryButton,
  icon,
  title,
  description,
  bgImage,
}: {
  primaryButton?: {
    title: string;
    onClick: () => void;
  };
  secondaryButton?: {
    title: string;
    onClick: () => void;
  };
  icon: string;
  title: string;
  description: string;
  bgImage: string;
}) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-y-2  w-full">
      <div
        className="flex items-center justify-center h-[100px] w-[100px] rounded-[30%] my-4"
        style={{
          backgroundImage: `url(${bgImage.toString()})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image src={icon} alt="password-home" width={40} height={40} />
      </div>
      <h3 className="text-[24px] leading-[29px] text-[#EFEFEF] text-center font-bold">
        {title}
      </h3>
      <p className="text-[16px] leading-[24px] text-[#A0A0A0] text-center font-[500] w-[300px]">
        {description}
      </p>
      <div className="flex items-center justify-center gap-x-6 my-4 w-[380px]">
        {primaryButton && (
          <PrimaryButton
            title={primaryButton.title}
            onClick={primaryButton.onClick}
            minWidth={"205px"}
            className="flex-1"
          />
        )}
        {secondaryButton && (
          <SecondaryButton
            title={secondaryButton.title}
            onClick={secondaryButton.onClick}
            minWidth={"205px"}
            className="flex-1"
          />
        )}
      </div>
    </div>
  );
};

export default EmptySection;
