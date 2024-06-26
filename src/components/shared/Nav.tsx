"use client";
import { colors } from "@/utils/constants/colors";
import { classNames } from "@/utils/helpers";
import { Menu, Transition } from "@headlessui/react";
import localFont from "next/font/local";
import Image from "next/image";
import SearchIcon from "@heroicons/react/outline/SearchIcon";
import { Fragment, useContext, useEffect, useState } from "react";
import { useSearch } from "@/context/Searchcontext";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import RightPan from "./RightPan";
import { useSession } from "next-auth/react";
import useAxiosAuth from "@/utils/hooks/useAxiosAuth";
import { URLConstants } from "@/utils/constants/urls";
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
  {
    name: "Upgrade",
    href: "#",
    icon: "/assets/icons/profile-menu/dark/king.svg",
  },
  {
    name: "Invite a Friend",
    href: "#",
    icon: "/assets/icons/profile-menu/dark/invite.svg",
  },
  {
    name: "Lock App",
    href: "#",
    icon: "/assets/icons/profile-menu/dark/lock.svg",
  },
  {
    name: "Log out",
    href: "#",
    icon: "/assets/icons/profile-menu/dark/logout.svg",
  },
];
const Nav = () => {
  const { setSearchOpen } = useSearch();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);
  const axiosAuth = useAxiosAuth();
  return (
    <>
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
                onFocus={() => setSearchOpen(true)}
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
            onClick={() => {
              setIsNotificationOpen(true);
            }}
            className="cursor-pointer"
          />
          <Link href="/settings">
            <Image
              src={"/assets/icons/settings.svg"}
              alt="settings"
              width={28}
              height={28}
              className="cursor-pointer"
            />
          </Link>

          <Menu as="div" className="flex-flex-shrink-0 shrink-0 relative">
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
              <Menu.Items
                className="w-[336px] flex-shrink-0 shrink-0  origin-top-right absolute z-10 right-0 mt-2 px-[16px] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 focus:outline-none pb-[1.88rem]"
                style={{
                  background: `url('/assets/icons/profile-menu/menu-light-bg.svg')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <Menu.Item>
                  <div className="flex items-center mx-[1.5rem] pt-[36px] pb-[26px] mb-[18px] border-b-[1px] border-[#666666] cursor-pointer gap-x-[1.5rem]">
                    <span className="inline-block relative">
                      <Image
                        width={50}
                        height={50}
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-[50px] w-[50px] rounded-full"
                        alt="profile-picture"
                      />
                      <Image
                        src={"/assets/icons/profile-menu/dark/camera.svg"}
                        width={18}
                        height={18}
                        alt="camera"
                        className="absolute bottom-0 right-0 block h-[18px] w-[18px] rounded-full"
                      />
                    </span>
                    <div className="flex flex-col items-start justify-center gap-y-[8px]">
                      <p className="text-[#252525] text-[1rem] font-[600] -tracking-[0.005rem] leading-normal p-0">
                        johndoe@gmail.com
                      </p>
                      <p className="text-[#252525] text-[1rem] font-[500] -tracking-[0.005rem] leading-normal p-0">
                        Free plan
                      </p>
                    </div>
                  </div>
                </Menu.Item>
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {
                      ({ active }) => (
                        <>
                          <Link
                            href={item.href}
                            onClick={() => {
                              if (item.name === "Log out") {
                                axiosAuth
                                  .get(URLConstants.logout())
                                  .then(() => {
                                    alert("Logged out successfully");
                                  })
                                  .catch(() => {
                                    alert("Something went wrong");
                                  })
                                  .finally(() => {
                                    localStorage.removeItem("isLoggedIn");
                                    setIsAuthenticated(false);
                                  });
                              }
                            }}
                          >
                            <div
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex items-center px-[1.5rem] py-[0.75rem] cursor-pointer gap-x-[0.75rem] hover:bg-[#666666] hover:bg-opacity-10 transition-all duration-200 ease-in-out"
                              )}
                            >
                              <Image
                                src={item.icon}
                                width={24}
                                height={24}
                                alt={item.name}
                                className="flex-shrink-0 shrink-0 w-[24px] h-auto"
                              />
                              <span className="text-[#252525] leading-normal -tacking-[0.005rem] text-[1rem]">
                                {item.name}
                              </span>
                            </div>
                          </Link>
                        </>
                      )
                      // item.name === "Sign out" ? (
                      //   <p
                      //     onClick={() => {
                      //       setIsAuthenticated(false);
                      //     }}
                      //     className={classNames(
                      //       active ? "bg-gray-100" : "",
                      //       "block py-2 px-4 text-sm text-gray-700"
                      //     )}
                      //   >
                      //     {item.name}
                      //   </p>
                      // ) : (
                      //   <Link
                      //     href={item.href}
                      //     className={classNames(
                      //       active ? "bg-gray-100" : "",
                      //       "block py-2 px-4 text-sm text-gray-700"
                      //     )}
                      //   >
                      //     {item.name}
                      //   </Link>
                      // )
                    }
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <RightPan
        isOpen={isNotificationOpen}
        title="Notifications"
        onClose={() => {
          setIsNotificationOpen(false);
        }}
      >
        <div className="w-full h-full bg-fray-200"></div>
      </RightPan>
    </>
  );
};

export default Nav;
