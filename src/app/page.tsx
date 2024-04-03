"use client";
import Accounts from "@/components/settings/Accounts";
import EquivalentDomains from "@/components/settings/EquivalentDomains";
import MFA from "@/components/settings/MFA";
import NeverUrls from "@/components/settings/NeverUrls";
import Security from "@/components/settings/Security";
import TrustedDevices from "@/components/settings/TrustedDevices";
import Appearance from "@/components/settings/appearance";
import { Framer } from "@/components/settings/framer";
import { Circle, Square, Triangle } from "@/components/settings/shapes";
import { useTabs } from "@/components/settings/useTabs";
import { PrimaryButton, SecondaryButton } from "@/components/shared/Buttons";
import Heading from "@/components/shared/Heading";
import RightPan from "@/components/shared/RightPan";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const [hookProps] = useState({
    tabs: [
      {
        label: "Accounts",
        children: <Accounts />,
        id: "Accounts",
      },
      {
        label: "MFA",
        children: <MFA />,
        id: "MFA",
      },
      {
        label: "Security",
        children: <Security />,
        id: "Security",
      },
      {
        label: "Trusted Devices",
        children: <TrustedDevices />,
        id: "Trusted Devices",
      },
      {
        label: "Appearance",
        children: <Appearance />,
        id: "Appearance",
      },
      {
        label: "Equivalent Domains",
        children: <EquivalentDomains />,
        id: "Equivalent Domains",
      },
      {
        label: "Never URLs",
        children: <NeverUrls />,
        id: "Never URLs",
      },
    ],
    initialTabId: "Triangle",
  });
  const framer = useTabs(hookProps);

  const keyDownHandler = (event: KeyboardEvent) => {
    event.preventDefault();
    if (event.ctrlKey && event.key === "k") {
      console.log("You just pressed Control and K!");
    }
  };
  const openRightPanel = () => {
    setIsOpen(true);
  };
  const closeRightPanel = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
  });
  return (
    <>
      <main className="flex h-full flex-col flex-1 items-center justify-start w-full bg-[#191919] overflow-y-scroll">
        <Heading title="Settings" />
        <div className="w-full  px-16">
          <Framer.Tabs {...framer.tabProps} />
          <Framer.Content
            {...framer.contentProps}
            className="text-center rounded-3xl py-9 flex flex-col items-center"
          >
            {framer.selectedTab.children}
          </Framer.Content>
        </div>
      </main>
      <RightPan
        isOpen={isOpen}
        title="Add a password"
        onClose={closeRightPanel}
      >
        <div className="w-full h-full bg-fray-200"></div>
      </RightPan>
    </>
  );
}
