'use client'
import { PrimaryButton, TertiaryButton } from "@/components/shared/Buttons";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useContext, useEffect } from "react";

const page = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) {
      return redirect("/");
    }
  }, [isAuthenticated]);
  return (
    <div className="w-full h-screen max-h screen max-w-screen bg-[#EFEFEF] flex ">
      <div className="h-full w-1/2 flex-1/2 bg-[#DFE6E2] flex-col flex justify-between items-start p-16 pb-36">
        <Image
          src={"/assets/icons/logo.svg"}
          alt="secure passwords"
          width={60}
          height={60}
        />
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-[64px] leading-[80px] text-[#252525] font-bold pb-4">
            Welcome to SecurePasswords
          </h1>
          <p className="text-[16px] leading-[24px] w-[60%] text-[#666666] font-[500]">
            Access your passwords & personal data in the web app - quickly and
            securely.
          </p>
        </div>
      </div>
      <div className="h-full flex-1/2 p-12 px-16 flex flex-col justify-between items-end w-1/2">
        <div className="flex justify-end items-center gap-6 w-full">
          <p className="text-[16px] text-[#666666] tracking-wide">
            Already have an account ?
          </p>
          <Link href="/login">
            <TertiaryButton title="Login" width={"200px"} />
          </Link>
        </div>
        <div className="flex flex-1 w-full justify-center items-start flex-col gap-y-2">
          <h3 className="text-[24px] font-bold -tracking-tight text-[#252525]">
            Register an account
          </h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsAuthenticated(true);
            }}
            className="w-[90%] flex flex-col items-start justify-center gap-y-3 "
          >
            <input
              type="text"
              placeholder="Email Address"
              className="w-full bg-transparent text-[#666666] px-[16px] py-[12px] text-[16px] rounded-[3px] focus:outline-none focus:ring-0 border-[1.5px] border-[#666666]"
            />
            <input
              type="password"
              placeholder="Master Password"
              className="w-full bg-transparent text-[#666666] px-[16px] py-[12px] text-[16px] rounded-[3px] focus:outline-none focus:ring-0 border-[1.5px] border-[#666666]"
            />
            <div className="flex items-center justify-start w-full mt-0 gap-x-2">
              <div className="flex-1 bg-[#D9D9D9] h-[10px] rounded-[10px]" />
              <p className="text-[16px] text-[#727272] tracking-wide">
                Strength
              </p>
            </div>
            <input
              type="password"
              placeholder="Confirm Master Password"
              className="w-full bg-transparent text-[#666666] px-[16px] py-[12px] text-[16px] rounded-[3px] focus:outline-none focus:ring-0 border-[1.5px] border-[#666666]"
            />

            <PrimaryButton
              title={`Sign up - it\u2019s free`}
              className="mt-3"
            />
          </form>
          <p className="text-[#666666] text-[16px]">
            By completing this form, I agree to the{" "}
            <Link href="#">
              <span className="text-[#428CF9]">Terms</span>
            </Link>{" "}
            and{" "}
            <Link href="#">
              <span className="text-[#428CF9]">Privacy Policy</span>
            </Link>
            .
          </p>
        </div>
        <p className="text-[16px] text-[#666666] tracking-wide">
          Version 2024.1.0
        </p>
      </div>
    </div>
  );
};

export default page;
