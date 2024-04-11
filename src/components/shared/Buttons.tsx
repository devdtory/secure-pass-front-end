"use client";
import React from "react";

const PrimaryButton = ({
  onClick,
  disabled,
  type,
  title,
  width,
  className,
  minWidth,
}: any) => {
  return (
    <button
      onClick={onClick ?? (() => {})}
      disabled={disabled ?? false}
      type={type ?? "button"}
      style={{ width: width ?? "auto", minWidth: minWidth }}
      className={`bg-[#2ED370] border-[1.5px] border-[#2ED370] dark:text-[#1A1A1A] text-[#EFEFEF] px-[32px] py-[8px] text-[16px]  rounded-[5px] ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      {title ?? "Button"}
    </button>
  );
};
const SecondaryButton = ({
  onClick,
  disabled,
  type,
  title,
  width,
  minWidth,
  className,
}: any) => {
  return (
    <button
      onClick={onClick ?? (() => {})}
      disabled={disabled ?? false}
      type={type ?? "button"}
      style={{ width: width ?? "auto", minWidth: minWidth }}
      className={`bg-transparent border-[1.5px] border-[#666666] dark:border-[#EDEDED] dark:text-[#EDEDED] text-[#666666] px-[32px] py-[8px] text-[16px] rounded-[5px] ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      {title ?? "Button"}
    </button>
  );
};
const TertiaryButton = ({
  onClick,
  disabled,
  type,
  title,
  width,
  minWidth,
  className,
}: any) => {
  return (
    <button
      onClick={onClick ?? (() => {})}
      disabled={disabled ?? false}
      type={type ?? "button"}
      style={{ width: width ?? "auto", minWidth: minWidth }}
      className={`bg-[#20934E26] border-none text-[#20934E]  border-[1.5px]  px-[32px] py-[8px] text-[16px] rounded-[5px] ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      {title ?? "Button"}
    </button>
  );
};

export { PrimaryButton, SecondaryButton, TertiaryButton };
