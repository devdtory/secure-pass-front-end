import Image from "next/image";
import { Section } from "./Common";
import Device from "./Device";

const TrustedDevices = () => {
  return (
    <div className="flex w-full flex-col gap-y-[2.5rem]">
      <div className="w-full flex-col">
        <div
          className={`w-full text-left gap-y-[1rem] flex flex-col justify-start items-start`}
        >
          <h3 className="font-[400] leading-normal text-[1.5rem] text-[#EFEFEF]">
            Trusted Devices
          </h3>
          <p className="font-[500] leading-[1.5rem] w-full text-[1rem] text-[#A0A0A0]">
            Here are the devices you are currently logged in to your
            SecurePasswords. If you see a device which you can’t recognise make
            sure to log out.{" "}
          </p>
        </div>
      </div>
      <div className="w-full flex-col flex gap-y-[0.75rem]">
        <h3 className="font-[400] leading-[1.5rem] text-left w-full text-[0.8125rem] text-[#EFEFEF] uppercase tracking-[0.0625rem] ">
          Current Device
        </h3>
        <Device className={`border-[#2AC066] border-[2px]`} rightIcon={false}/>
      </div>
      <div className="w-full flex-col flex gap-y-[0.75rem]">
        <h3 className="font-[400] leading-[1.5rem] text-left w-full text-[0.8125rem] text-[#EFEFEF] uppercase tracking-[0.0625rem] ">
          Other Devices
        </h3>
        <Device className={``} />
        <Device className={``} />
        <Device className={``} />
        <Device className={``} />
        <Device className={``} />
      </div>
    </div>
  );
};

export default TrustedDevices;
