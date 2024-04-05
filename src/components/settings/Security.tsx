"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { RowItem, Section } from "./Common";
import { Checkbox } from "../ui/checkbox";

const Security = () => {
  return (
    <div className="flex w-full flex-col gap-y-[24px]">
      <Section title="Primary Security">
        <div className="flex flex-col w-full items-start justify-start gap-y-[18px]">
          <RowItem
            title="Security Email"
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[16px] cursor-pointer">
                <p className="text-[16px] leading-[24px] text-[#2ED370] font-500">
                  Send test email
                </p>
              </div>
            }
          />
          <RowItem
            title="Country Restriction"
            middleText="Only allow login from selected countries"
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[16px]">
                <Checkbox
                  // checked={true}
                  className="cursor-pointer h-[16px] w-[16px] checked:bg-[#0F6FFD]"
                />
              </div>
            }
          />
          <RowItem
            title="Tor networks"
            middleText="Prohibit logins from Tor networks"
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[16px]">
                <Checkbox
                  // checked={true}
                  className="cursor-pointer h-[16px] w-[16px] checked:bg-[#0F6FFD]"
                />
              </div>
            }
          />
        </div>
      </Section>
      <Section title="Privacy">
        <div className="flex flex-col w-full items-start justify-start gap-y-[18px]">
          <RowItem
            title="Track history"
            middleText="Keep track of login and form fill history."
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[16px]">
                <Checkbox
                  // checked={true}
                  className="cursor-pointer h-[16px] w-[16px] checked:bg-[#0F6FFD]"
                />
              </div>
            }
          />
          <RowItem
            title="Help improve securepasswords"
            middleText="Send anonymous error reporting and interaction data to improve lastpass."
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[16px]">
                <Checkbox
                  // checked={true}
                  className="cursor-pointer h-[16px] w-[16px] checked:bg-[#0F6FFD]"
                />
              </div>
            }
          />
          <RowItem
            title="Enable app attribution"
            middleText="Send anonymous data about your SecurePasswords journey to help us improve your experience."
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[16px]">
                <Checkbox
                  // checked={true}
                  className="cursor-pointer h-[16px] w-[16px] checked:bg-[#0F6FFD]"
                />
              </div>
            }
          />
        </div>
      </Section>
      <Section title="Tools">
        <div className="flex flex-col w-full items-start justify-start gap-y-[18px]">
          <RowItem
            title="Destroy sessions"
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[16px] cursor-pointer">
                <p className="text-[16px] leading-[24px] text-[#2ED370] font-500">
                  Destroy sessions{" "}
                  <span className="text-[24px] my-auto pl-1">&#8594;</span>
                </p>
              </div>
            }
          />
          <RowItem
            title="Remove Duplicates"
            rightContent={
              <div className="flex justify-end items-center h-full gap-x-[16px] cursor-pointer">
                <p className="text-[16px] leading-[24px] text-[#2ED370] font-500">
                  Remove Duplicates{" "}
                  <span className="text-[24px] my-auto pl-1">&#8594;</span>
                </p>
              </div>
            }
          />
        </div>
      </Section>
    </div>
  );
};

export default Security;
