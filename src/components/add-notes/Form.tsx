"use client";
import React, { useRef, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";
import Image from "next/image";
import { InputField, PasswordField, TextAreaField } from "../shared/InputField";
import { classNames } from "@/utils/helpers";
import CustomSwitch from "../shared/Switch";

const Form = ({ width, breakpoint, closeRightPanel }) => {
  const [submitted, setSubmitted] = useState(false);
  const inputValidity = useRef([]);
  const [isFormValid, setIsFormValid] = useState(true);
  const [current, setCurrent] = useState("Details");
  const [enabled, setEnabled] = useState(false);
  const tabs = [
    { name: "Details", href: "#" },
    { name: "Attachments", href: "#" },
    { name: "Advance Settings", href: "#" },
  ];
  const handleInputValidityChange = (index: number, isValid: boolean) => {
    // Update the validity status of each input field
    inputValidity.current[index] = isValid;
    // Check overall form validity
    setIsFormValid(inputValidity.current.every((valid) => valid));
  };

  const renderFormTab = (tabName: string) => {
    switch (tabName) {
      case "Details":
        return (
          <>
            <InputField
              onValidityChange={(isValid: boolean) =>
                handleInputValidityChange(0, isValid)
              }
              submitted={submitted}
              id="name"
              name="name"
              label="Name"
              type="text"
              validateType={"text"}
              errorMessage="Name is not valid"
            />
            <TextAreaField
              id="note"
              name="note"
              label="Type your note here"
              height="40rem"
              rows={5}
            />
          </>
        );
      case "Attachments":
        return (
          <>
            <p className="text-[1rem] leading-[1.5rem] -tracking-[0.005rem] font-[500]">
              Coming Soon...
            </p>
          </>
        );
      case "Advance Settings":
        return (
          <>
            <div className="flex items-center justify-between">
              <p className="text-[1rem] leading-[1.5rem] -tracking-[0.005rem] font-[500]">
                Require master password
              </p>
              <CustomSwitch enabled={enabled} setEnabled={setEnabled} />
            </div>
            <div
              className={`w-full py-[0.75rem] min-h-[4.3125rem] flex justify-center items-center border-[#5A5A5A]
       border-[2px] rounded-[0.25rem]`}
            >
              {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
              <select
                id="folder"
                name="folder"
                className="bg-transparent px-[2rem] w-full border-none flex-1 pr-[2.5rem] font-[500] text-[#A0A0A0] text-[1rem] focus:outline-none focus:ring-0 flex justify-start items-center gap-y-[0.75rem]"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
              >
                {tabs.map((tab) => (
                  <option
                    value={tab.name}
                    key={tab.name}
                    className="bg-[#252525]  px-[1.5rem]"
                  >
                    {tab.name}
                  </option>
                ))}
              </select>
            </div>
          </>
        );
    }
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
      <div className="text-[1.125rem] font-[600] transition-colors my-[1.5rem]">
        <div className="sm:hidden w-full">
          <label
            htmlFor="tabs"
            className="sr-only font-[500] text-[#A0A0A0] text-[1rem] "
          >
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <p
                  key={tab.name}
                  className={classNames(
                    current === tab.name
                      ? "text-[#EFEFEF]"
                      : "border-transparent text-[#A0A0A0] hover:text-[#EFEFEF] hover:border-[#EFEFEF]",
                    "whitespace-nowrap pb-2 px-1 border-b-2 cursor-pointer"
                  )}
                  aria-current={current === tab.name ? "page" : undefined}
                  onClick={() => setCurrent(tab.name)}
                >
                  {tab.name}
                </p>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex-col flex h-full w-full gap-y-[2.5rem] pt-0 pb-[2.5rem]">
        {renderFormTab(current)}
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
