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
              title="All Items"
              rightContent={
                <div className="flex items-center justify-end gap-x-6">
                  <PrimaryButton
                    title="Add Items"
                    onClick={openRightPanel}
                    minWidth={"154px"}
                  />
                  <SecondaryButton
                    title="Import Items"
                    onClick={openRightPanel}
                    minWidth={"154px"}
                  />
                </div>
              }
            /> */}
            <EmptySection
              title="Let's get Started"
              description="Add your first item. You will find it here
              whenever you need it"
              icon="/assets/icons/all-items.svg"
              primaryButton={{ title: "Add Items", onClick: openRightPanel }}
              secondaryButton={{
                title: "Import Items",
                onClick: openRightPanel,
              }}
              bgImage="/assets/icons/empty/bg-password.svg"
            />
          </main>
        )}

        <RightPan
          isOpen={isOpen}
          title="Add Items"
          onClose={closeRightPanel}
        >
          <div className="w-full h-full bg-fray-200"></div>
        </RightPan>
      </>
    </ProtectedRoute>
  );
}
export default page;
