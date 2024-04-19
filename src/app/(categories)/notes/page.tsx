"use client";
import Form from "@/components/add-notes/Form";
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
  const breakpoint = 1024;

  const openRightPanel = () => {
    setIsOpen(true);
  };
  const closeRightPanel = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

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
          title="Add secure note"
          onClose={closeRightPanel}
          width="700px"
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
