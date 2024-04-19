"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomSwitch({enabled, setEnabled}) {
  

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? "bg-[#2ED370]" : "bg-[#EFEFEF]",
        "relative inline-flex items-center flex-flex-shrink-0 shrink-0 h-[30px] w-[60px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-[30px]" : "translate-x-[2px]",
          "pointer-events-none inline-block h-[24px] w-[24px] rounded-full bg-[#B3B3B3] shadow transform ring-0 transition ease-in-out duration-200"
        )}
      />
    </Switch>
  );
}
