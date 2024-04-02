"use client";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "22rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="open"
        className="bg-[#151515] flex flex-col z-10 gap-20 p-5 top-0 left-0 h-full shadow shadow-neutral-600 overflow-scroll"
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <motion.div  className={`${isOpen ? 'flex':'hidden'} justify-start items-start duration-100 transition-all ease-in-out`}>
            <Image
              src={"/assets/icons/rocket.svg"}
              alt="logo"
              width={20}
              height={20}
            />
            <div className="flex-col px-2 gap-y-1 flex">
              <p className="text-[16px] text-[#A0A0A0]">Getting Started</p>
              <div className="flex items-center justify-start gap-x-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  <>
                    <div className={`w-[22px] h-[7px] bg-green-500 ${item === 1 && 'rounded-l-full'} ${item===5 && 'rounded-r-full'}`} />
                  </>
                ))}
              </div>
            </div>
          </motion.div>
          <button
            className="p-1 rounded-full flex"
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-neutral-200"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <NavigationLink name="Dashboard">
            <Image
              src={"/assets/icons/settings.svg"}
              alt="settings"
              width={28}
              height={28}
              className="cursor-pointer"
            />
          </NavigationLink>
          <NavigationLink name="Projects">
            <Image
              src={"/assets/icons/settings.svg"}
              alt="settings"
              width={28}
              height={28}
              className="cursor-pointer"
            />
          </NavigationLink>
          <NavigationLink name="Tasks">
            <Image
              src={"/assets/icons/settings.svg"}
              alt="settings"
              width={28}
              height={28}
              className="cursor-pointer"
            />
          </NavigationLink>
          <NavigationLink name="Reporting">
            <Image
              src={"/assets/icons/settings.svg"}
              alt="settings"
              width={28}
              height={28}
              className="cursor-pointer"
            />
          </NavigationLink>
          <NavigationLink name="Users">
            <Image
              src={"/assets/icons/settings.svg"}
              alt="settings"
              width={28}
              height={28}
              className="cursor-pointer"
            />
          </NavigationLink>
        </div>
      </motion.nav>
    </>
  );
};

export default SideNavigation;
interface NavigationLink {
  children: React.ReactNode;
  name: string;
}

const NavigationLink = ({ children, name }: NavigationLink) => {
  return (
    <Link
      href="#"
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <p className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
        {name}
      </p>
    </Link>
  );
};
