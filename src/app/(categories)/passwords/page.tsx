"use client";
import Form from "@/components/add-passwords/Form";
import { PrimaryButton, SecondaryButton } from "@/components/shared/Buttons";
import { DataTable } from "@/components/shared/CustomTable";
import EmptySection from "@/components/shared/EmptyPage";
import Heading from "@/components/shared/Heading";
import RightPan from "@/components/shared/RightPan";
import ProtectedRoute from "@/utils/ProtectedRoutes";
import useAxiosAuth from "@/utils/hooks/useAxiosAuth";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [passwords, setPasswords] = useState([]);
  const [width, setWidth] = useState(1024);
  const axiosAuth = useAxiosAuth();
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

  const getPasswords = async () => {
    console.log("getPasswords");
    try {
      const resp = await axiosAuth.get("/user/checklist", {
        headers: {
          "Content-Type": "application/json",
        
        },
      });
      console.log({ resp });
    } catch (e) {
      console.log({ e });
    }
  };
  useEffect(() => {
    // Fetch data from API
    getPasswords();
  }, []);
  return (
    <ProtectedRoute>
      <>
        {passwords?.length === 0 ? (
          <>
            <main className="flex h-full flex-col flex-1 items-center justify-start w-full bg-[#191919] overflow-y-scroll">
              <Heading
                title="Passwords"
                rightContent={
                  <div className="flex items-center justify-end gap-x-6">
                    <PrimaryButton
                      title="Add Password"
                      onClick={openRightPanel}
                      minWidth={"154px"}
                    />
                    <SecondaryButton
                      title="Import Passwords"
                      onClick={openRightPanel}
                      minWidth={"154px"}
                    />
                  </div>
                }
              />
              <div className="w-full px-16 py-5">
                <DataTable />
              </div>
            </main>
          </>
        ) : (
          <main className="flex h-full flex-col flex-1 items-center justify-start w-full bg-[#191919] overflow-y-scroll">
            <EmptySection
              bgImage="/assets/icons/empty/bg-password.svg"
              title="Forget Password Resets"
              description="Add your passwords. You will find it here whenever you need it"
              icon="/assets/icons/password-home.svg"
              primaryButton={{ title: "Add Password", onClick: openRightPanel }}
              secondaryButton={{
                title: "Import Passwords",
                onClick: openRightPanel,
              }}
            />
          </main>
        )}

        <RightPan
          isOpen={isOpen}
          title="Add a password"
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
