"use client";
import { PrimaryButton, SecondaryButton } from "@/components/shared/Buttons";
import EmptySection from "@/components/shared/EmptyPage";
import Heading from "@/components/shared/Heading";
import RightPan from "@/components/shared/RightPan";
import ProtectedRoute from "@/utils/ProtectedRoutes";
import { useEffect, useState } from "react";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [passwords, setPasswords] = useState([]);
  
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
          <></>
        ) : (
          <main className="flex h-full flex-col flex-1 items-center justify-start w-full bg-[#191919] overflow-y-scroll">
            {/* <Heading
              title="Secure Notes"
              rightContent={
                <div className="flex items-center justify-end gap-x-6">
                  <PrimaryButton
                    title="Add Secure Notes"
                    onClick={openRightPanel}
                    minWidth={"180px"}
                  />
                </div>
              }
            /> */}
            <EmptySection
              bgImage="/assets/icons/empty/bg-notes.svg"
              title="Notes with security"
              description="Jot down a Wi-Fi code, office security alarm code or your friend's birthday"
              icon="/assets/icons/empty/note.svg"
              primaryButton={{
                title: "Add Secure Note",
                onClick: openRightPanel,
              }}
            />
          </main>
        )}

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
export default page;
