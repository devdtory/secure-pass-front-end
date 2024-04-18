"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import validate from "@/utils/validate";
const InputField = ({
  id,
  label,
  errorMessage = "Please fill out this field",
  validateType,
  submitted,
  onValidityChange,
  ...props
}) => {
  // State to track the input value and validity
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);
  // Function to handle input change
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    // Set touched to true when the user interacts with the input
    if (!touched) setTouched(true);
    console.log("inputValue", inputValue, touched, isValid);
  };

  // Debounced function to validate the input
  const debouncedValidate = debounce(() => {
    const _isValid = validate(inputValue, validateType ?? props.type);
    onValidityChange(_isValid);
    if (touched || submitted) {
      console.log("inputValue", inputValue, validateType ?? props.type);
      setIsValid(_isValid);
      onValidityChange(_isValid);
      console.log("isValid", _isValid);
    }
  }, 300); // Adjust the debounce delay as needed

  // Trigger validation on input change with debounce
  useEffect(() => {
    debouncedValidate();
    return () => {
      debouncedValidate.cancel();
    };
  }, [inputValue, debouncedValidate, submitted]);

  return (
    <div
      className={`w-full px-[1.5rem] py-[0.75rem] min-h-[4.3125rem] flex justify-center items-center ${
        isValid ? "border-[#5A5A5A]" : "!border-red-500"
      } border-[2px] rounded-[0.25rem]`}
    >
      <div className="w-full relative group">
        <input
          {...props}
          id={id}
          value={inputValue}
          onChange={handleInputChange}
          className={`w-full bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 pt-[0.25rem] leading-[1.5rem] text-[#fff] placeholder:text-[#fff] peer group-focus-within:translate-y-[10%] ${
            inputValue.length > 0 && "translate-y-[10%]"
          }
          `}
        />
        <label
          htmlFor={id}
          className={`transform transition-all absolute top-0 left-0 h-full flex items-center text-[1rem] group-focus-within:text-[0.8125rem] font-[500] text-[#A0A0A0]  group-focus-within:h-1/2  group-focus-within:-translate-y-[80%]  group-focus-within:pl-0 ${
            props?.required ? "" : ""
          }
          ${
            inputValue?.length > 0 &&
            "pl-0 !text-[0.8125rem] h-1/2 -translate-y-[80%]"
          }
          ${touched && !isValid ? "text-red-500" : ""}
          `}
        >
          {label}
        </label>
        {!isValid && (touched || submitted) && (
          <div className="absolute top-1/2 w-fit right-2 transform -translate-y-1/2 group-hover:block hidden">
            <Image
              src={"/assets/icons/tools/alert.svg"}
              alt="alert"
              width={24}
              height={24}
            />
            {/* Tooltip with error message */}
            <div className="absolute top-[-3rem] right-0 bg-red-500 text-white text-xs p-1 min-w-[7rem] rounded shadow-md opacity-0 group-hover:opacity-100">
              {errorMessage}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PasswordField = ({
  id,
  label,
  errorMessage = "Please fill out this field",
  validateType,
  submitted,
  onValidityChange,
  ...props
}) => {
  // State to track the input value and validity
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  // Function to handle input change
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    // Set touched to true when the user interacts with the input
    if (!touched) setTouched(true);
    console.log("inputValue", inputValue, touched, isValid);
  };

  // Debounced function to validate the input
  const debouncedValidate = debounce(() => {
    if (touched || submitted) {
      console.log("inputValue", inputValue, validateType ?? props.type);
      const _isValid = validate(inputValue, validateType ?? props.type);
      setIsValid(_isValid);
      onValidityChange(_isValid);
      console.log("isValid", isValid);
    }
  }, 300); // Adjust the debounce delay as needed

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const generateValidPassword = () => {
    let password = "";
    let isValidPassword = false;

    // Continue generating random passwords until one is valid
    while (!isValidPassword) {
      password = generateRandomPassword();
      isValidPassword = validate(password, validateType ?? props.type);
    }

    // Set the generated password as the input value
    setInputValue(password);
    // Set touched to true and validate the generated password
    setTouched(true);
    debouncedValidate();
  };

  // Function to generate a random password
  const generateRandomPassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 16; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };

  // Trigger validation on input change with debounce
  useEffect(() => {
    console.log("inputValue", inputValue, touched, isValid);
    debouncedValidate();
    return () => {
      debouncedValidate.cancel();
    };
  }, [inputValue, debouncedValidate, submitted]);
  return (
    <div
      className={`w-full px-[1.5rem] py-[0.75rem] min-h-[4.3125rem] flex justify-center items-center ${
        isValid ? "border-[#5A5A5A]" : "!border-red-500"
      } border-[2px] rounded-[0.25rem]`}
    >
      <div className="w-full relative group">
        <input
          {...props}
          id={id}
          value={inputValue}
          type={isPasswordVisible ? "text" : "password"}
          onChange={handleInputChange}
          className={`w-full bg-transparent outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 pt-[0.25rem] leading-[1.5rem] text-[#fff] placeholder:text-[#fff] peer group-focus-within:translate-y-[10%] ${
            inputValue.length > 0 && "translate-y-[10%]"
          }
          `}
        />
        <label
          htmlFor={id}
          className={`transform transition-all absolute top-0 left-0 h-full flex items-center text-[1rem] group-focus-within:text-[0.8125rem] font-[500] text-[#A0A0A0]  group-focus-within:h-1/2  group-focus-within:-translate-y-[80%]  group-focus-within:pl-0 ${
            props?.required ? "" : ""
          }
          ${
            inputValue.length > 0 &&
            "pl-0 !text-[0.8125rem] h-1/2 -translate-y-[80%]"
          }
          ${touched && !isValid ? "text-red-500" : ""}
          `}
        >
          {label}
        </label>
        <p className="text-[1rem] text-[#2ED370] top-0 right-2 absolute flex justify-end items-center gap-x-[1rem] cursor-pointer">
          <span onClick={generateValidPassword}>Generate</span>
          <Image
            src={
              !isPasswordVisible
                ? "/assets/icons/eye.svg"
                : "/assets/icons/eye-off.svg"
            }
            width={24}
            height={24}
            alt="eye"
            className="group"
            onClick={togglePasswordVisibility}
          />
          {!isValid && (touched || submitted) && (
            <div className="absolute top-[-5rem] right-0 bg-red-500 text-white text-xs p-1 min-w-[10rem] rounded shadow-md opacity-0 group-hover:opacity-100">
              {errorMessage}
            </div>
          )}
        </p>
      </div>
      {/*       
      <p className="text-[1rem] text-[#2ED370] flex justify-end items-center gap-x-[1rem] cursor-pointer">
        Generate
        <Image src={"/assets/icons/eye.svg"} width={24} height={24} alt="eye" className="group"/>
        {!isValid && (touched || submitted) && (
          <div className="absolute top-[-1.5rem] right-0 bg-red-500 text-white text-sm p-2 rounded shadow-md opacity-0 group-hover:opacity-100">
            {errorMessage}
          </div>
        )}
      </p> */}
    </div>
  );
};

const TextAreaField = ({ id, label, ...props }) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [touched, setTouched] = useState(false);
  return (
    <div className="w-full px-[1.5rem] py-[0.75rem] h-[10.9375rem]  flex justify-start items-start border-[#5A5A5A] border-[2px] rounded-[0.25rem]">
      <div className="w-full relative group flex-1">
        <textarea
          {...props}
          id={id}
          rows={5}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`w-full bg-transparent resize-none h-full  outline-none focus:outline-none focus:ring-0 border-none text-[1rem] p-0 pt-[0.75rem] leading-[1.5rem] text-[#fff] placeholder:text-[#fff] peer
          group-focus-within:translate-y-[5%] ${
            inputValue.length > 0 && "translate-y-[5%]"
          }
          `}
        />
        <label
          htmlFor={id}
          className={`transform transition-all absolute top-0 left-0 h-full flex items-start text-[1rem] group-focus-within:text-[0.8125rem] font-[500] text-[#A0A0A0]  group-focus-within:h-1/2  group-focus-within:-translate-y-[5%]  group-focus-within:pl-0
          ${
            inputValue.length > 0 &&
            "pl-0 !text-[0.8125rem] h-1/2 -translate-y-[5%]"
          }
          `}
        >
          {label}
        </label>
      </div>
    </div>
  );
};
export { InputField, PasswordField, TextAreaField };
