"use client";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";
import Image from "next/image";

const Form = ({ width, breakpoint, closeRightPanel }) => {
  const [name, setName] = React.useState("aaa");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [folder, setFolder] = React.useState("");
  const [note, setNote] = React.useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted");
      }}
      className="w-full h-full px-[2rem] overflow-y-scroll relative"
    >
      <div
        className="flex items-center mx-auto justify-center h-[75px] w-[75px] xl:h-[100px] xl:w-[100px] rounded-[30%] mt-[1.5rem] mb-[2.69rem]"
        style={{
          backgroundImage: `url("./assets/icons/empty/bg-credit-card.svg")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={"/assets/icons/empty/credit-card.svg"}
          alt="password-home"
          width={width > breakpoint ? 45 : 30}
          height={width > breakpoint ? 45 : 30}
        />
      </div>
      <div className="w-full px-[1.5rem] py-[0.75rem] h-[4.3125rem] flex flex-col justify-center items-start border-[#5A5A5A] border-[2px] rounded-[0.25rem]">
        <p className="text-[0.8125rem] font-[500] text-[#A0A0A0]">
          Name<span className="text-[#F06868]"> *</span>
        </p>
        <input
          className="w-full bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 leading-[1.5rem] text-[#fff] placeholder:text-[#fff]"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex-col flex w-full gap-y-[2.5rem] py-[2.5rem]">
        {/* login details */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Login Details
          </p>
          <div className="w-full px-[1.5rem] py-[0.75rem] h-[4.3125rem] flex flex-col justify-center items-start border-[#5A5A5A] border-[2px] rounded-[0.25rem]">
            <p className="text-[0.8125rem] font-[500] text-[#A0A0A0]">
              Email or username
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 leading-[1.5rem] text-[#fff] placeholder:text-[#fff]"
              type="email"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="w-full px-[1.5rem] py-[0.75rem] h-[4.3125rem] flex justify-start items-center border-[#5A5A5A] border-[2px] rounded-[0.25rem] tracking-[-0.005rem]">
            <input
              className="w-full bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 leading-[1.5rem] text-[#A0A0A0] placeholder:text-[#fff]"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-[1rem] text-[#2ED370] flex justify-end items-center gap-x-[1rem] cursor-pointer">
              Generate
              <Image
                src={"/assets/icons/eye.svg"}
                width={24}
                height={24}
                alt="eye"
              />
            </p>
          </div>
        </div>
        {/* Websites */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Websites
          </p>
          <div className="w-full px-[1.5rem] py-[0.75rem] h-[4.3125rem] flex justify-start items-center border-[#5A5A5A] border-[2px] rounded-[0.25rem] tracking-[-0.005rem]">
            <input
              className="w-full bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 leading-[1.5rem] text-[#A0A0A0] placeholder:text-[#fff]"
              type="text"
              placeholder="Website URL"
            />
          </div>
        </div>
        {/* Other */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Other
          </p>
          <div className="w-full px-[1.5rem] py-[0.75rem] h-[4.3125rem] flex justify-start items-center border-[#5A5A5A] border-[2px] rounded-[0.25rem] tracking-[-0.005rem]">
            <input
              className="w-full bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 leading-[1.5rem] text-[#A0A0A0] placeholder:text-[#fff]"
              type="text"
              placeholder="Folder"
              name="folder"
            />
          </div>
          <div className="w-full px-[1.5rem] py-[0.75rem] h-[10.9375rem] flex justify-start items-start border-[#5A5A5A] border-[2px] rounded-[0.25rem] tracking-[-0.005rem]">
            <textarea
              className="w-full resize-none h-full bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 leading-[1.5rem] text-[#A0A0A0] placeholder:text-[#fff]"
              placeholder="Note"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-x-[0.5rem] py-[1rem] items-center w-full bg-[#202020] sticky bottom-0">
        <PrimaryButton
          title="Save"
          onClick={() => {
            alert("Form submitted");
            closeRightPanel();
          }}
          minWidth={"7.5rem"}
        />
        <SecondaryButton
          title="Cancel"
          onClick={closeRightPanel}
          minWidth={"7.5rem"}
        />
      </div>
    </form>
  );
};

export default Form;
