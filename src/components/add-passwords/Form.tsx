"use client";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";
import Image from "next/image";
import { InputField, PasswordField, TextAreaField } from "../credit-card/InputField";

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
          backgroundImage: `url("./assets/icons/add-passwords/squircle.svg")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={"/assets/icons/add-passwords/netflix.png"}
          alt="password-home"
          width={width > breakpoint ? 40 : 30}
          height={width > breakpoint ? 40 : 30}
        />
      </div>
      <InputField id="name" label="Name" type="text" required />

      <div className="flex-col flex w-full gap-y-[2.5rem] py-[2.5rem]">
        {/* login details */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Login Details
          </p>
          <InputField
            id="email"
            name="email"
            label="Email or username"
            type="email"
          />
          <PasswordField
            id="password"
            name="password"
            label="Password"
            type="password"
          />
        </div>
        {/* Websites */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Websites
          </p>
          <InputField
            id="website"
            name="website"
            label="Website"
            type="text"
            required
          />
        </div>
        {/* Other */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Other
          </p>
          <InputField id="folder" name="folder" label="Folder" type="text" />
          <TextAreaField id="note" name="note" label="Note" />
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
