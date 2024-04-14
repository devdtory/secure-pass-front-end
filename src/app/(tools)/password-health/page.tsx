"use client";
import PasswordBox from "@/components/password-health/PasswordBox";
import PasswordItem from "@/components/password-health/PasswordItem";
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
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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
        <main className="flex h-full flex-col flex-1 items-center justify-start w-full bg-[#191919] overflow-y-scroll px-[2rem]">
          <div className="w-full bg-[#060606] min-h-[24rem]  mt-10 p-[2rem] flex flex-col justify-start relative gap-y-2 rounded-[0.5rem]">
            <h3 className="text-[#A0A0A0] text-[0.75rem] font-[700] tracking-[0.075rem] uppercase font-generalSans">
              Password Health
            </h3>
            <div className="flex items-center justify-start px-[2rem] h-full w-full">
              <div className="flex flex-col justify-center items-start h-full w-[40%] gap-y-[1rem]">
                <div className="w-[12rem] h-[12rem]">
                  <CircularProgressbarWithChildren
                    value={77}
                    counterClockwise
                    styles={buildStyles({
                      pathColor: "#2ED370",
                      trailColor: "#1A1A1A",
                    })}
                  >
                    <div className="flex items-center flex-col justify-center">
                      <h3 className="text-[#2ED370] text-[3.5rem] font-[800] leading-normal p-0">
                        77
                      </h3>
                      <p className="text-[#A0A0A0] text-[1rem] tracking-[-0.005rem] leading-[1.5rem] font-[400]">
                        High Safety
                      </p>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
                <div className="flex items-center  gap-x-[0.5rem] w-[12rem] justify-center">
                  <div className="w-[1rem] h-[1rem] rounded-full bg-[#2ED370]" />
                  <p className="text-[1rem] tracking-[-0.005rem] leading-[1.5rem] font-[400] text-[#fff]">
                    MFA: <span className="text-[#2ED370]">ON</span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] w-fit">
                <PasswordBox
                  icon="/assets/icons/tools/cross.svg"
                  title="Weak Passwords"
                  value={0}
                  color="#F14444"
                />
                <PasswordBox
                  icon="/assets/icons/tools/cross.svg"
                  title="Reused Passwords"
                  value={0}
                  color="#F14444"
                />
                <PasswordBox
                  icon="/assets/icons/tools/clock.svg"
                  title="Old Passwords"
                  value={24}
                  color="#FFC52F"
                />
                <PasswordBox
                  icon="/assets/icons/tools/cross.svg"
                  title="Duplicates"
                  value={0}
                  color="#F14444"
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-[#252525] flex-1 my-[2rem] p-[2rem] flex flex-col justify-start relative gap-y-2 rounded-[0.5rem]">
            <h3 className="text-[#A0A0A0] text-[0.75rem] font-[700] tracking-[0.075rem] uppercase font-generalSans">
              At-Risk Passwords
            </h3>
            <div className="flex flex-col px-[0.56rem]">
              <PasswordItem />
              <PasswordItem />
              <PasswordItem />
              <PasswordItem />
              <PasswordItem />
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
