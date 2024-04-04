import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
type Props = {
  title: string;
  body: ReactNode;
};
const satoshi = localFont({
  src: "../../../public/assets/fonts/Satoshi-Bold.otf",
});

export const Disclosure = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-transparent rounded-lg">
      <button
        aria-controls={props.title}
        aria-expanded={isOpen}
        className="flex justify-between text-left items-center w-full space-x-4 px-6"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex justify-start items-center py-1">
          <div
            className={`text-[14px] font-extrabold text-[#666666] uppercase font-generalSans tracking-wider`}
          >
            {props.title}
          </div>
        </div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? "minus" : "plus"}
            initial={{
              rotate: isOpen ? -90 : 90,
            }}
            animate={{
              rotate: 0,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circOut",
              },
            }}
            exit={{
              rotate: isOpen ? -90 : 90,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "circIn",
              },
            }}
          >
            {isOpen ? (
              <Image
                src={"/assets/icons/dropdown.svg"}
                width={24}
                height={24}
                alt="close"
              />
            ) : (
              <Image
                width={24}
                height={24}
                src={"/assets/icons/dropdown.svg"}
                alt="open"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
      <motion.div
        id={props.title}
        initial={false}
        animate={
          isOpen
            ? {
                height: "auto",
                opacity: 1,
                display: "block",
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }
            : {
                height: 0,
                opacity: 0,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
                transitionEnd: {
                  display: "none",
                },
              }
        }
        // className="font-light"
      >
        {props.body}
      </motion.div>
    </div>
  );
};
