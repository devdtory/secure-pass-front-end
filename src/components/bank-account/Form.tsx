"use client";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";
import Image from "next/image";
import { InputField, PasswordField, TextAreaField } from "../shared/InputField";

const Form = ({ width, breakpoint, closeRightPanel }) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted", formRef.current?.elements);
        alert("Form submitted");
        closeRightPanel();
      }}
      className="w-full h-full px-[2rem] overflow-y-scroll relative"
    >
      <div
        className="flex items-center mx-auto justify-center h-[75px] w-[75px] xl:h-[100px] xl:w-[100px] rounded-[30%] mt-[1.5rem] mb-[2.69rem]"
        style={{
          backgroundImage: `url("./assets/icons/empty/bg-bank.svg")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={"/assets/icons/empty/bank.svg"}
          alt="password-home"
          width={width > breakpoint ? 45 : 35}
          height={width > breakpoint ? 45 : 35}
        />
      </div>

      <div className="flex-col flex w-full gap-y-[2.5rem] ">
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <InputField
            id="title"
            name="title"
            label="Title*"
            type="text"
            required
          />
          <InputField
            id="bank_name"
            name="bank_name"
            label="Bank Name"
            type="text"
            required
          />
          <InputField
            id="account_type"
            name="account_type"
            label="Account Type"
            type="text"
            required
          />
          <InputField
            id="swift_code"
            name="swift_code"
            label="Swift Code"
            type="text"
            required
          />
          <InputField
            id="iban_number"
            name="iban_number"
            label="IBAN Number"
            type="text"
            required
          />
          <InputField id="pin" name="pin" label="PIN" type="text" required />
          <TextAreaField
            id="branch_address"
            name="branch_address"
            label="Branch Address"
            type="text"
            required
          />
          <InputField
            id="branch_phone"
            name="branch_phone"
            label="Branch Phone"
            type="text"
            required
          />
        </div>

        {/* Other */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Other
          </p>
          <InputField
            id="folder"
            name="folder"
            label="Folder"
            type="text"
            required
          />
          <TextAreaField id="note" name="note" label="Note" />
        </div>
      </div>
      <div className="flex justify-end gap-x-[0.5rem] py-[1rem] items-center w-full bg-[#202020] sticky bottom-0">
        <PrimaryButton title="Save" type="submit" minWidth={"7.5rem"} />
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
