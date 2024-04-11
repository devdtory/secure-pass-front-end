"use client";
import { PrimaryButton, SecondaryButton } from "@/components/shared/Buttons";
import EmptySection from "@/components/shared/EmptyPage";
import Heading from "@/components/shared/Heading";
import RightPan from "@/components/shared/RightPan";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import ProtectedRoute from "@/utils/ProtectedRoutes";
import Image from "next/image";
import { title } from "process";
import { useEffect, useState } from "react";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [passwords, setPasswords] = useState([]);
  const [passwordLength, setPasswordLength] = useState(12);
  
  const openRightPanel = () => {
    setIsOpen(true);
  };
  const closeRightPanel = () => {
    setIsOpen(false);
  };

  return (
    <ProtectedRoute>
      <>
        <main className="flex h-full flex-col flex-1 items-center justify-start w-full bg-[#191919] overflow-y-scroll">
          <div className="w-full bg-[#060606] h-[370px] px-16 pt-10 flex flex-col justify-start relative gap-y-2">
            <p className="text-[12px] text-[#A0A0A0] font-[700] font-generalSans leading-[16px] uppercase">
              Password generator
            </p>
            <h3 className="text-[40px] font-[700] text-white leading-[52px]">
              hduyt82tg4hj28ey9276
            </h3>
            <div className="flex items-center justify-between bottom-0 absolute left-0 right-0 px-16 py-5">
              <button className="px-[16px] py-[8px] font-[700] bg-[#EEB258] uppercase rounded-[5px] font-generalSans text-[12px] leading-[16px]">
                Moderate
              </button>
              <div className="flex justify-end items-center gap-x-6">
                <div className="rounded-full border-[2px] h-[40px] w-[40px] border-[#CCCCCC] justify-center items-center flex">
                  <Image
                    src={"/assets/icons/refresh.svg"}
                    alt="refresh"
                    width={24}
                    height={24}
                  />
                </div>
                <SecondaryButton title="Copy Password" minWidth="150px" />
              </div>
            </div>
          </div>
          <div className="w-full px-16 py-6">
            <div className="flex items-start justify-start py-8">
              <div className="flex-1/2 flex flex-col justify-center items-start  gap-y-3 w-1/2 ">
                <p className="text-[18px] leading-[22px] font-[500]">
                  Password Type :{" "}
                </p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex justify-between text-[16px] rounded-[5px] items-center focus:outline-none relative border-[1.5px] border-[#FFFFFF] w-[300px] px-[16px] py-[8px]">
                      Random Password
                      <Image
                        alt="sort"
                        src={"/assets/icons/arrow-down.svg"}
                        width={24}
                        height={24}
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-[#252525] w-[300px] border-none rounded-[5px] text-[14px] text-[#EFEFEF]"
                  >
                    <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-4">
                      Type 1
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-4">
                      Type 2
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-4">
                      Type 3
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex-1/2 flex flex-col justify-center items-start  gap-y-3 flex-1 w-1/2">
                <p className="text-[18px] leading-[22px] font-[500]">
                  Password Length : {passwordLength}
                </p>
                <Slider
                  defaultValue={[passwordLength]}
                  max={36}
                  step={1}
                  onValueChange={(value) => {
                    setPasswordLength(value[0]);
                  }}
                  className="w-full py-3"
                />
              </div>
            </div>
            <div className="flex-col flex gap-y-3">
              <p className="text-[18px] leading-[22px] font-[500] w-full my-3">
                More Options:{" "}
              </p>
              <div className="flex w-full justify-start gap-x-9">
                {[
                  {
                    title: "Use uppercase",
                    value: false,
                  },
                  {
                    title: "Use lowercase",
                    value: false,
                  },
                  {
                    title: "Use numbers",
                    value: false,
                  },
                  {
                    title: "Use symbols",
                    value: false,
                  },
                ].map((item, index) => (
                  <div className="flex items-center justify-start w-full mt-0 gap-x-2">
                    <input
                      type="checkbox"
                      name={item.title}
                      className="focus:ring-0 focus:o                                                                                                                                                                                                                                                                                                                                         utline-none border-[#666666] rounded-[3px] bg-transparent checked:bg-[#666666] focus:bg-[#666666]"
                    />
                    <p className="text-[16px] text-[#727272] ">{item.title}</p>
                  </div>
                ))}
              </div>
              <SecondaryButton
                title="+ Save Password"
                className="w-full !text-[#2ED370] !border-[1.5px] !border-[#2ED370]  my-6"
                minWidth="150px"
              />
            </div>
          </div>
        </main>

        <RightPan isOpen={isOpen} title="Add Items" onClose={closeRightPanel}>
          <div className="w-full h-full bg-fray-200"></div>
        </RightPan>
      </>
    </ProtectedRoute>
  );
}
export default page;
