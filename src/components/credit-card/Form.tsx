"use client";
import React, { useRef, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";
import Image from "next/image";
import { InputField, PasswordField, TextAreaField } from "../shared/InputField";

const Form = ({ width, breakpoint, closeRightPanel }) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const inputValidity = useRef([]);
  const [isFormValid, setIsFormValid] = useState(true);
  const handleInputValidityChange = (index: number, isValid: boolean) => {
    // Update the validity status of each input field
    inputValidity.current[index] = isValid;
    // Check overall form validity
    setIsFormValid(inputValidity.current.every((valid) => valid));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form Submission", inputValidity, isFormValid);
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
            onValidityChange={(isValid: boolean) =>
              handleInputValidityChange(0, isValid)
            }
            submitted={submitted}
            id="title"
            name="title"
            label="Title*"
            type="text"
            validateType={"text"}
          />
          <InputField
            onValidityChange={(isValid: boolean) =>
              handleInputValidityChange(1, isValid)
            }
            submitted={submitted}
            id="cardholder_name"
            name="cardholder_name"
            label="Cardholder Name*"
            type="text"
            validateType={"text"}
          />
          <InputField
            onValidityChange={(isValid: boolean) =>
              handleInputValidityChange(2, isValid)
            }
            submitted={submitted}
            id="card_number"
            name="card_number"
            label="Card Number*"
            type="text"
            validateType={"creditCard"}
            errorMessage="Please enter valid credit card number"
          />
          <div className="w-full flex items-center gap-x-[1rem]">
            <InputField
              onValidityChange={(isValid: boolean) =>
                handleInputValidityChange(3, isValid)
              }
              submitted={submitted}
              id="expiry_date"
              name="expiry_date"
              label="Expiration Date*"
              type="date"
              validateType={"text"}
              defaultValue={"12-01-2024"}
            />
            <InputField
              onValidityChange={(isValid: boolean) =>
                handleInputValidityChange(4, isValid)
              }
              submitted={submitted}
              id="cvv"
              name="cvv"
              label="CVV or CID"
              type="text"
              validateType={"cvv"}
              errorMessage="Please enter valid CVV or CID"
            />
          </div>
        </div>

        {/* Other */}
        <div className="w-full flex-col flex text-left gap-y-[1rem]">
          <p className="text-[1.25rem] text-[#EDEDED] font-[700] leading-[1.5rem]">
            Other
          </p>
          <InputField
            onValidityChange={(isValid: boolean) =>
              handleInputValidityChange(5, isValid)
            }
            submitted={submitted}
            id="folder"
            name="folder"
            label="Folder"
            type="text"
            validateType={"text"}
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
