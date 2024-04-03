"use client";
import { NavigationLink } from "@/components/shared/NavigationLink";
import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { slideAnimation } from "../motion";

export type FAQ = { question: string; answer: ReactNode };

const categories = [
  {
    lightIcon: "/assets/icons/nav/light/all-item.svg",
    darkIcon: "/assets/icons/nav/dark/all-item.svg",
    title: "All Items",
  },
  {
    lightIcon: "/assets/icons/nav/light/password.svg",
    darkIcon: "/assets/icons/nav/dark/password.svg",
    title: "Passwords",
  },
  {
    lightIcon: "/assets/icons/nav/light/note.svg",
    darkIcon: "/assets/icons/nav/dark/note.svg",
    title: "Notes",
  },
  {
    lightIcon: "/assets/icons/nav/light/personal-info.svg",
    darkIcon: "/assets/icons/nav/dark/personal-info.svg",
    title: "Personal Info",
  },
  {
    lightIcon: "/assets/icons/nav/light/sharing.svg",
    darkIcon: "/assets/icons/nav/dark/sharing.svg",
    title: "Sharing Center",
  },
  {
    lightIcon: "/assets/icons/nav/light/trash.svg",
    darkIcon: "/assets/icons/nav/dark/trash.svg",
    title: "Trash",
  },
];
const wallets = [
  {
    lightIcon: "/assets/icons/nav/light/credit-card.svg",
    darkIcon: "/assets/icons/nav/dark/credit-card.svg",
    title: "Credit Card",
  },
  {
    lightIcon: "/assets/icons/nav/light/bank.svg",
    darkIcon: "/assets/icons/nav/dark/bank.svg",
    title: "Bank Account",
  },
  {
    lightIcon: "/assets/icons/nav/light/crypto.svg",
    darkIcon: "/assets/icons/nav/dark/crypto.svg",
    title: "Crypto Account",
  },
];
const folders = [
  {
    lightIcon: "/assets/icons/nav/light/folder.svg",
    darkIcon: "/assets/icons/nav/dark/folder.svg",
    title: "Add new folder",
  },
];
const tools = [
  {
    lightIcon: "/assets/icons/nav/password-generator.svg",
    darkIcon: "/assets/icons/nav/password-generator.svg",
    title: "Password Generator",
  },
  {
    lightIcon: "/assets/icons/nav/password-health.svg",
    darkIcon: "/assets/icons/nav/password-health.svg",
    title: "Password Health",
  },
];
export const defaultFAQs: FAQ[] = [
  {
    question: "Categories",
    answer: (
      <motion.div className="flex flex-col">
        {categories.map((category, i) => (
          <motion.div
            {...slideAnimation("top", i * 0.2)}
            className="ease-in-out transition-colors"
          >
            <NavigationLink name={category.title}>
              <Image
                src={category.darkIcon}
                alt="settings"
                width={28}
                height={28}
                className="cursor-pointer"
              />
            </NavigationLink>
          </motion.div>
        ))}
      </motion.div>
    ),
  },
  {
    question: "Wallets",
    answer: (
      <div className="flex flex-col">
        {wallets.map((wallet, i) => (
          <>
            <NavigationLink name={wallet.title}>
              <Image
                src={wallet.darkIcon}
                alt="settings"
                width={28}
                height={28}
                className="cursor-pointer"
              />
            </NavigationLink>
          </>
        ))}
      </div>
    ),
  },
  {
    question: "Folders",
    answer: (
      <div className="flex flex-col">
        {folders.map((folder, i) => (
          <>
            <NavigationLink name={folder.title}>
              <Image
                src={folder.darkIcon}
                alt="settings"
                width={28}
                height={28}
                className="cursor-pointer"
              />
            </NavigationLink>
          </>
        ))}
      </div>
    ),
  },
  {
    question: "Tools",
    answer: (
      <div className="flex flex-col">
        {tools.map((category, i) => (
          <>
            <NavigationLink name={category.title}>
              <Image
                src={category.darkIcon}
                alt="settings"
                width={28}
                height={28}
                className="cursor-pointer"
              />
            </NavigationLink>
          </>
        ))}
      </div>
    ),
  },
];
