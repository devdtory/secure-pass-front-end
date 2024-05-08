"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { RowItem, Section } from "./Common";

const Accounts = () => {
  return (
    <div className="flex w-full flex-col gap-y-[24px]">
      <Section title="Account Info">
        <div className="flex flex-col w-full items-start justify-start gap-y-[18px]">
          <RowItem
            title="Email"
            middleText="adamevans@gmail.com"
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[10px] xl:gap-x-[16px]">
                <p className="text-[14px] xl:text-[16px] leading-[24px] text-[#2ED370] font-500">
                  Change Email
                </p>
                <Image
                  src={"/assets/icons/i-button.svg"}
                  alt="i-button"
                  width={24}
                  height={24}
                  className="cursor-pointer xl:w-[24px] xl:h-[24px] w-[20px] h-[20px]"
                />
              </div>
            }
          />
          <RowItem
            title="Account Type"
            middleText="SecurePasswords basic user | Limited features"
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[10px] xl:gap-x-[16px]">
                <p className="text-[14px] xl:text-[16px] leading-[24px] text-[#2ED370] font-500">
                Upgrade
                </p>
                <Image
                  src={"/assets/icons/i-button.svg"}
                  alt="i-button"
                  width={24}
                  height={24}
                  className="cursor-pointer xl:w-[24px] xl:h-[24px] w-[20px] h-[20px]"
                />
              </div>
            }
          />
          <RowItem
            title="Choose account language"
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[10px] xl:gap-x-[16px]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex justify-between text-[14px] xl:text-[16px] bg-[#252525] rounded-[5px] items-center focus:outline-none relative w-[200px] px-[24px] py-[10px]">
                      English
                      <Image
                        alt="sort"
                        src={"/assets/icons/dropdown.svg"}
                        width={24}
                        height={24}
                        className="cursor-pointer xl:w-[24px] xl:h-[24px] w-[20px] h-[20px]"
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-[#252525] w-[200px] border-none rounded-[5px] text-[14px] text-[#EFEFEF]"
                  >
                    <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-[24px] py-[10px]">
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-[24px] py-[10px]">
                      Spanish
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-[24px] py-[10px]">
                      Mandarin (Chinese)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            }
          />
          {/* <RowItem
            title="Time Zone"
            rightContent={
              <div className="flex justify-end items-center my-[0.5rem] xl:my-0 h-full gap-x-[10px] xl:gap-x-[16px]">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex  justify-between text-left text-[14px] xl:text-[16px] bg-[#252525] rounded-[5px] items-center focus:outline-none relative w-auto  xl:w-[400px] px-[24px] py-[10px]">
                      (-05:00) Eastern time (US & Canada)
                      <Image
                        alt="sort"
                        src={"/assets/icons/dropdown.svg"}
                        width={24}
                        height={24}
                      />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-[#252525] xl:w-[400px] border-none rounded-[5px] text-[14px] text-[#EFEFEF]"
                  >
                    <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-[24px] py-[10px]">
                      (-05:00) Eastern time (US & Canada)
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-[24px] py-[10px]">
                      (+05:00) Indian time (India)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            }
          /> */}
        </div>
      </Section>
      <Section title="Master Password">
        <div className="flex flex-col w-full items-start justify-start gap-y-[18px]">
          <RowItem
            title="Master Password"
            middleText="Last changed on February 26th, 2022 at 03:07 PM"
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[10px] xl:gap-x-[16px]">
                <p className=" text-[14px] xl:text-[16px] leading-[24px] text-[#2ED370] font-500">
                  Change Master Password
                </p>
                <Image
                  src={"/assets/icons/i-button.svg"}
                  alt="i-button"
                  width={24}
                  height={24}
                  
                  className="cursor-pointer xl:w-[24px] xl:h-[24px] w-[20px] h-[20px]"
                />
              </div>
            }
          />
        </div>
      </Section>
      <Section title="SMS account recovery">
        <div className="flex flex-col w-full items-start justify-start gap-y-[18px]">
          <RowItem
            title="SMS account recovery"
            middleText="+1 393 333 393"
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[10px] xl:gap-x-[16px]">
                <p className=" text-[14px] xl:text-[16px] leading-[24px] text-[#2ED370] font-500">
                  Change Phone number
                </p>
                <Image
                  src={"/assets/icons/i-button.svg"}
                  alt="i-button"
                  width={24}
                  height={24}
                  className="cursor-pointer xl:w-[24px] xl:h-[24px] w-[20px] h-[20px]"
                />
              </div>
            }
          />
        </div>
      </Section>
    </div>
  );
};

export default Accounts;
