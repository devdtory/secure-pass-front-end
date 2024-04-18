"use client";
import React, { useRef, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";
import Image from "next/image";
import { InputField, PasswordField, TextAreaField } from "../shared/InputField";

const Form = ({ width, breakpoint, closeRightPanel }) => {
  const [name, setName] = React.useState("aaa");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [folder, setFolder] = React.useState("");
  const [note, setNote] = React.useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputValidity = useRef([]);
  const [isFormValid, setIsFormValid] = useState(true);
  const handleInputValidityChange = (index:number, isValid:boolean) => {
    // Update the validity status of each input field
    inputValidity.current[index] = isValid;
    // Check overall form validity
    setIsFormValid(inputValidity.current.every((valid) => valid));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Form Submission',inputValidity,isFormValid)
        setSubmitted(true);
        if (!isFormValid) {
          alert("Error occured");
          return; // Prevent form submission if form is not valid
        }
        
        alert("Form submitted");
        // console.log("Form submitted");
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
      <InputField
        onValidityChange={(isValid) => handleInputValidityChange(0, isValid)}
        submitted={submitted}
        id="name"
        label="Name"
        type="text"
        validateType={"text"}
        errorMessage="Please fill out this message"
      />

      <div className="flex-col flex w-full gap-y-[2.5rem] py-[2.5rem]">
        {/* login details */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Login Details
          </p>
          <InputField
            onValidityChange={(isValid:boolean) =>
              handleInputValidityChange(0, isValid)
            }
            submitted={submitted}
            id="email"
            name="email"
            label="Email or username"
            type="email"
            validateType={"email"}
            errorMessage="Email is not valid"
          />
          <PasswordField
            id="password"
            name="password"
            label="Password"
            type="password"
            validateType={"password"}
            submitted={submitted}
            onValidityChange={(isValid) => handleInputValidityChange(1, isValid)}
            errorMessage="Password must contain at least 8 characters, including letters and numbers"
          />
        </div>
        {/* Websites */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Websites
          </p>
          <InputField
            onValidityChange={(isValid:true) =>
              handleInputValidityChange(2, isValid)
            }
            submitted={submitted}
            id="website"
            name="website"
            label="Website"
            type="text"
            validateType={"email"}
            errorMessage="Email is not valid"
          />
        </div>
        {/* Other */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Other
          </p>
          <InputField
            onValidityChange={(isValid:boolean) =>
              handleInputValidityChange(3, isValid)
            }
            submitted={submitted}
            id="folder"
            name="folder"
            label="Folder"
            type="text"
            validateType={"none"}
            errorMessage="Please fill out this message"
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
