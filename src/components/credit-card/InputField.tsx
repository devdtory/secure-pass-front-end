import Image from "next/image";
import React from "react";

const InputField = ({ id, label, ...props }) => {
  return (
    <div className="w-full px-[1.5rem] py-[0.75rem] h-[4.3125rem] flex justify-center items-center border-[#5A5A5A] border-[2px] rounded-[0.25rem]">
      <div className="w-full relative group">
        <input
          {...props}
          id={id}
          required
          className="w-full bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 pt-[0.25rem] leading-[1.5rem] text-[#fff] placeholder:text-[#fff] peer"
        />
        <label
          htmlFor={id}
          className="transform transition-all absolute top-0 left-0 h-full flex items-center text-[1rem] group-focus-within:text-[0.8125rem] font-[500] text-[#A0A0A0] peer-valid:text-[0.8125rem] group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

const PasswordField = ({ id, label, ...props }) => {
  return (
    <div className="w-full px-[1.5rem] py-[0.75rem] h-[4.3125rem] flex justify-center items-center border-[#5A5A5A] border-[2px] rounded-[0.25rem]">
      <div className="w-full relative group">
        <input
          {...props}
          id={id}
          required
          className="w-full bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 pt-[0.25rem] leading-[1.5rem] text-[#fff] placeholder:text-[#fff] peer"
        />
        <label
          htmlFor={id}
          className="transform transition-all absolute top-0 left-0 h-full flex items-center text-[1rem] group-focus-within:text-[0.8125rem] font-[500] text-[#A0A0A0] peer-valid:text-[0.8125rem] group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
        >
          {label}
        </label>
      </div>
      <p className="text-[1rem] text-[#2ED370] flex justify-end items-center gap-x-[1rem] cursor-pointer">
        Generate
        <Image src={"/assets/icons/eye.svg"} width={24} height={24} alt="eye" />
      </p>
    </div>
  );
};

const TextAreaField = ({ id, label, ...props }) => {
  return (
    <div className="w-full px-[1.5rem] py-[0.75rem] h-[10.9375rem]  flex justify-start items-start border-[#5A5A5A] border-[2px] rounded-[0.25rem]">
      <div className="w-full relative group flex-1">
        <textarea
          {...props}
          id={id}
          required
          rows={5}
          className="w-full bg-transparent resize-none h-full  outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 pt-[0.75rem] leading-[1.5rem] text-[#fff] placeholder:text-[#fff] peer"
        />
        <label
          htmlFor={id}
          className="transform transition-all absolute top-0 left-0 h-full flex items-center text-[1rem] group-focus-within:text-[0.8125rem] font-[500] text-[#A0A0A0] peer-valid:text-[0.8125rem] group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-1/3 peer-valid:-translate-y-1/3 group-focus-within:pl-0 peer-valid:pl-0"
        >
          {label}
        </label>
      </div>
    </div>
  );
};
export { InputField, PasswordField, TextAreaField };
