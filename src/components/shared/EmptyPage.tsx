"use client";
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
  const [width, setWidth] = React.useState(1024);
  const breakpoint = 768;
  React.useLayoutEffect(() => {
    const handleResizeWindow = () => {
      setWidth(window.innerWidth);
      console.log("width", window.innerWidth);
      console.log("breakpoint", breakpoint);
    }
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-y-2  w-full">
      <div
        className="flex items-center justify-center h-[75px] w-[75px] xl:h-[100px] xl:w-[100px] rounded-[30%] my-4"
        style={{
          backgroundImage: `url(${bgImage.toString()})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={icon}
          alt="password-home"
          width={width > breakpoint ? 40 : 30}
          height={width > breakpoint ? 40 : 30}
        />
      </div>
      <h3 className="text-[18px] leading-[22px] xl:text-[24px] xl:leading-[29px] text-[#EFEFEF] text-center font-bold">
        {title}
      </h3>
      <p className="text-[14px] leading-[18px] xl:text-[16px] xl:leading-[24px] text-[#A0A0A0] text-center font-[500] w-[300px]">
        {description}
      </p>
      <div className="flex items-center justify-center gap-x-6 my-4 w-[380px]">
        {primaryButton && (
          <PrimaryButton
            title={primaryButton.title}
            onClick={primaryButton.onClick}
            minWidth={width > breakpoint ? "205px" : "154px"}
            className="flex-1 max-lg:text-[14px]"
          />
        )}
        {secondaryButton && (
          <SecondaryButton
            title={secondaryButton.title}
            onClick={secondaryButton.onClick}
            minWidth={width > breakpoint ? "205px" : "154px"}
            className="flex-1 max-lg:text-[14px]"
          />
        )}
      </div>
    </div>
  );
};

export default EmptySection;
