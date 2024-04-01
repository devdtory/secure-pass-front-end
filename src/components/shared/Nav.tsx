"use client";
import { colors } from "@/utils/constants/colors";
import { classNames } from "@/utils/helpers";
import { Menu, Transition } from "@headlessui/react";
import localFont from "next/font/local";
import Image from "next/image";
import SearchIcon from "@heroicons/react/outline/SearchIcon";
import { Fragment } from "react";
// Font files can be colocated inside of `pages`
const satoshi = localFont({
  src: "../../../public/assets/fonts/Satoshi-Bold.otf",
});
const user = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const Nav = () => {
  return (
    <div
      className={`max-w-screen w-full bg-[#252525]  h-[82px] lg:px-16 flex flex-row items-center justify-between`}
    >
      <h2
        className={`${satoshi.className} text-[24px] text-black dark:text-white`}
      >
        Secure Passwords
      </h2>
      <div className="flex flex-1 items-center">
        <div className="w-full mx-8 lg:mx-16">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon
                className="h-4 w-4 text-[#A0A0A0] ml-1"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full  border border-[#555555] rounded-md py-2 pl-10 pr-3 text-sm bg-[#1A1A1A] sm:text-sm placeholder-[#A0A0A0] "
              placeholder="Search Secure Passwords (⌘K)"
              type="search"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-6">
        <Image
          src={"/assets/icons/notifications.svg"}
          alt="notifications"
          width={28}
          height={28}
          className="cursor-pointer"
        />
        <Image
          src={"/assets/icons/settings.svg"}
          alt="settings"
          width={28}
          height={28}
          className="cursor-pointer"
        />

        <Menu as="div" className="flex-shrink-0 relative">
          <div>
            <Menu.Button className="bg-[#1A1A1A] rounded-3xl flex focus:outline-none items-center justify-between px-2 py-2">
              <Image
                className="h-8 w-8 rounded-full"
                src={user.imageUrl}
                width={72}
                height={72}
                alt=""
              />
              <p className="text-[16px] px-2">Kevin Doe</p>
              <Image
                src="/assets/icons/arrow-down.svg"
                width={24}
                height={24}
                alt="chevron-down"
                className="pr-2"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block py-2 px-4 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
