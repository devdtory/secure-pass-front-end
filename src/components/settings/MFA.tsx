import Image from "next/image";
import React from "react";
import { Section } from "./Common";
import { SecondaryButton } from "../shared/Buttons";
import MFAProvider from "./MFAProvider";

const MFA = () => {
  return (
    <div className="flex w-full flex-col gap-y-[1.5rem]">
      <div className="w-full flex justify-start items-center gap-x-[0.5rem]">
        <Image
          src={"/assets/icons/mfa-lock.svg"}
          alt="lock"
          width={24}
          height={24}
        />
        <p className="font-[400] text-left leading-[1.5rem] w-full text-[1rem] text-[#2ED370] tracking-[-0.005rem]">
          Multifactor status: Active
        </p>
      </div>
      <Section title="Multifactor authentication">
        <div className="flex w-full flex-col gap-y-[1rem]">
          <MFAProvider
            provider="Google Authenticator"
            description="Generates one time verification code on your phone. Can also be used with Okla Verify."
            status="active"
            onClick={() => {}}
            icon="/assets/icons/settings/google-auth.svg"
          />
          <MFAProvider
            provider="Microsoft Authenticator"
            description="Generates one time verification code on your phone. Can also be used with Okla Verify."
            status="inactive"
            onClick={() => {}}
            icon="/assets/icons/settings/microsoft-auth.svg"
          />
          <MFAProvider
            provider="Duo Security"
            description="Generates one time verification code on your phone. Can also be used with Okla Verify."
            status="inactive"
            onClick={() => {}}
            icon="/assets/icons/settings/duo-auth.svg"
          />
          <MFAProvider
            provider="Yubico"
            description="Generates one time verification code on your phone. Can also be used with Okla Verify."
            status="inactive"
            onClick={() => {}}
            icon="/assets/icons/settings/yubico-auth.svg"
          />
        </div>
      </Section>
    </div>
  );
};

export default MFA;
