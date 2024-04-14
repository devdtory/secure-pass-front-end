"use client";
import Form from "@/components/bank-account/Form";
import { PrimaryButton, SecondaryButton } from "@/components/shared/Buttons";
import EmptySection from "@/components/shared/EmptyPage";
import Heading from "@/components/shared/Heading";
import RightPan from "@/components/shared/RightPan";
import ProtectedRoute from "@/utils/ProtectedRoutes";
import { useEffect, useState } from "react";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [passwords, setPasswords] = useState([]);
  const [width, setWidth] = useState(1024);
  const breakpoint = 768;

  const openRightPanel = () => {
    setIsOpen(true);
  };
  const closeRightPanel = () => {
    setIsOpen(false);
  };

  return (
    <ProtectedRoute>
      <>
        {passwords?.length > 0 ? (
          <>
            <Heading
              title="Bank Accounts"
              rightContent={
                <div className="flex items-center justify-end gap-x-6">
                  <PrimaryButton
                    title="Add Bank Account"
                    onClick={openRightPanel}
                    minWidth={"180px"}
                  />
                </div>
              }
            />
          </>
        ) : (
          <main className="flex h-full flex-col flex-1 items-center justify-start w-full bg-[#191919] overflow-y-scroll">
            <EmptySection
              bgImage="/assets/icons/empty/bg-bank.svg"
              title="Fill forms online stress-free"
              description="Jot down a Wi-Fi code, office security alarm code or your friend's birthday"
              icon="/assets/icons/empty/bank.svg"
              primaryButton={{
                title: "Add Bank Account",
                onClick: openRightPanel,
              }}
            />
          </main>
        )}

<RightPan
          isOpen={isOpen}
          title="Add Credit Card"
          onClose={closeRightPanel}
          width="34.0625rem"
        >
          <Form
            closeRightPanel={closeRightPanel}
            width={width}
            breakpoint={breakpoint}
          />
        </RightPan>
      </>
    </ProtectedRoute>
  );
}
export default page;
