"use client";
import { fadeAnimation } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

const items = [
    "Regular Exercise", 
    "Healthy Eating", 
    "Adequate Sleep", 
    "Regular Check-ups", 
    "Positive Thinking", 
    "Stress Management", 
    "Regular Hydration", 
    "Maintaining Posture"
]; // Add your other elements here
const postion = [
  "top-0 left-0 ",
  "top-0 right-0",
  "bottom-0 left-0",
  "bottom-0 right-0",
];
const contentAlignment = [
  "justify-start items-start",
  "justify-end items-start",
  "justify-start items-end",
  "justify-end items-end",
];
const dotPosition = [
  [
    "bottom-0 right-0 w-[10px] w-[10px] h-[10px]",
    "bottom-[15px] right-[15px] w-[20px] h-[20px]",
    "bottom-[35px] right-[35px] w-[30px] h-[30px]",
  ],
  [
    "bottom-0 left-0 w-[10px] w-[10px] h-[10px]",
    "bottom-[15px] left-[15px] w-[20px] h-[20px]",
    "bottom-[35px] left-[35px] w-[30px] h-[30px]",
  ],
  [
    "top-[35px] right-[35px] w-[30px] h-[30px]",
    "top-[15px] right-[15px] w-[20px] h-[20px]",
    "top-0 right-0 w-[10px] w-[10px] h-[10px]",
  ],
  [
    "top-[35px] left-[35px] w-[30px] h-[30px]",
    "top-[15px] left-[15px] w-[20px] h-[20px]",
    "top-0 left-0 w-[10px] w-[10px] h-[10px]",
  ],
];
const slideAnimationController = ["right", "left"];
export default function Dialogue() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) => (current + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={current}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        className={`absolute ${
          postion[current % postion.length]
        } w-[200px] h-[calc(50%-20px)]  flex p-4  gap-2`}
      >
        <motion.div
          className={`relative w-full h-full text-[16px] leading-[18px]  flex ${
            contentAlignment[current % contentAlignment.length]
          }`}
          {
            ...fadeAnimation
          }
        >
          {items[current]}
          {[1, 2, 3].map((item, dotIndex) => (
            <>
              <motion.div
             
                className={`absolute bg-black rounded-full ${
                  dotPosition[current % dotPosition.length][dotIndex]
                }`}
              ></motion.div>
            </>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const ComicConversations = () => {
  return (
    <div>
      <div className="comic-box">
        <p>Text content...</p>
      </div>
      <div className="dots-container">
        <div className="dot first"></div>
        <div className="dot second"></div>
        <div className="dot third"></div>
      </div>
    </div>
  );
};
