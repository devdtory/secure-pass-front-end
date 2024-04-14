"use client";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";
import Image from "next/image";
import { InputField, PasswordField, TextAreaField } from "./InputField";

const Form = ({ width, breakpoint, closeRightPanel }) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted", formRef.current?.elements["title"].value);
        alert("Form submitted");
        closeRightPanel();
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
            id="cardholder_name"
            name="cardholder_name"
            label="Cardholder Name*"
            type="text"
            required
          />
          <InputField
            id="card_number"
            name="card_number"
            label="Card Number*"
            type="text"
            required
          />
          <div className="w-full flex items-center gap-x-[1rem]">
            <InputField
              id="expiry_date"
              name="expiry_date"
              label="Expiration Date*"
              type="date"
              required
              defaultValue="2022-01-01"
            />
            <InputField
              id="cvv"
              name="cvv"
              label="CVV or CID"
              type="text"
              required
            />
          </div>
        </div>

        {/* Other */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Other
          </p>
          <InputField id="folder" name="folder" label="Folder" type="text" required/>
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
