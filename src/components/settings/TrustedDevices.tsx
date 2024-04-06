import { Section } from "./Common";

const TrustedDevices = () => {
  return (
    <div className="flex w-full flex-col gap-y-[24px]">
      <div className="w-full bg-red-500 rounded-[12px] py-[24px]">
        <div
          className={`w-full flex justify-start items-center px-16 py-5 pt-12`}
        >
          <h3 className="leading-6 font-bold text-[32px]">Trusted Devices</h3>
        </div>
      </div>
    </div>
  );
};

export default TrustedDevices;
