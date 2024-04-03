import React from "react";

const PrimaryButton = ({ onClick, disabled, type, title, width }: any) => {
  return (
    <button
      onClick={onClick ?? (() => {})}
      disabled={disabled ?? false}
      type={type ?? "button"}
      className={`bg-[#2ED370] dark:text-[#1A1A1A] text-[#EFEFEF] px-[32px] py-[8px] text-[16px] w-[${
        width ?? "auto"
      }] rounded-[5px] ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      {title ?? "Button"}
    </button>
  );
};
const SecondaryButton = ({ onClick, disabled, type, title, width }: any) => {
  return (
    <button
      onClick={onClick ?? (() => {})}
      disabled={disabled ?? false}
      type={type ?? "button"}
      className={`bg-transparent border-[1.5px] border-[#666666] dark:border-[#EDEDED] dark:text-[#EDEDED] text-[#666666] px-[32px] py-[8px] text-[16px] w-[${
        width ?? "auto"
      }] rounded-[5px] ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      {title ?? "Button"}
    </button>
  );
};
// const TertiaryButton = () => {}
export { PrimaryButton,SecondaryButton };
