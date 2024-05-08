"use client";
import RowComponent from "@/components/getting-started/RowComponent";
import RightPan from "@/components/shared/RightPan";
import ProtectedRoute from "@/utils/ProtectedRoutes";
import { useEffect, useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const keyDownHandler = (event: KeyboardEvent) => {
    event.preventDefault();
    // if (event.ctrlKey && event.key === "k") {
    //   console.log("You just pressed Control and K!");
    // }
  };
  const openRightPanel = () => {
    setIsOpen(true);
  };
  const closeRightPanel = () => {
    setIsOpen(false);
  };

  const gettingsStartedData = [
    {
      title: "Save first password or import passwords",
      description:
        "Importing passwords from any password manger or browser.",
      icon: "/assets/icons/get-started/step-1.svg",
      rightText: "Takes 1 minute",
      action: () => {},
    },
    {
      title: "Download mobile app",
      description:
        "Take SecurePasswords with you every with the mobile app.",
      icon: "/assets/icons/get-started/step-2.svg",
      rightText: "Takes 1 minute",
      action: () => {},
    },
    {
      title: "Setup MFA with mobile app",
      description:
        "Improve the security of your digital life.",
      icon: "/assets/icons/get-started/step-3.svg",
      rightText: "Takes 1 minute",
      action: () => {},
    },
    {
      title: "Add SecurePasswords browser extension",
      description:
        "For fast and easy logins get the plugin for your favorite browser.",
      icon: "/assets/icons/get-started/step-4.svg",
      rightText: "Takes 1 minute",
      action: () => {},
    },
    {
      title: "Review Security Audit (Only if imported password)",
      description:
        "Check to ensure you are following best security practices.",
      icon: "/assets/icons/get-started/step-5.svg",
      rightText: "Takes 1 minute",
      action: () => {},
    },
  ];
  return (
    <ProtectedRoute>
      <>
        <main className="flex h-full flex-col flex-1 items-center justify-start w-full bg-[#191919] overflow-y-scroll">
          <div
            className={`w-full flex justify-center flex-col items-start px-16 py-5 pt-12 gap-2`}
          >
            <h3 className="leading-[38px] font-bold text-[32px]">
              Get Started
            </h3>
            <p className="text-[#CCCCCC] font-[400] leading-[24px]">
              Now it's time to explore secure passwords and make your life more
              easier and secure.
            </p>
          </div>
          <div
            className={`w-full flex justify-center flex-col items-start px-16 py-5 `}
          >
            {gettingsStartedData.map((step, index) => (
              <RowComponent
                title={step.title}
                description={step.description}
                icon={step.icon}
                rightText={step.rightText}
                action={() => {}}
                isBottomBorder={index === 4 ? 0 : 1}
              />
            ))}
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
    </ProtectedRoute>
  );
}
export default Home;
