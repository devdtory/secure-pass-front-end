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
    link: "/all-items",
  },
  {
    lightIcon: "/assets/icons/nav/light/password.svg",
    darkIcon: "/assets/icons/nav/dark/password.svg",
    title: "Passwords",
    link: "/passwords",
  },
  {
    lightIcon: "/assets/icons/nav/light/note.svg",
    darkIcon: "/assets/icons/nav/dark/note.svg",
    title: "Notes",
    link: "/notes",
  },
  {
    lightIcon: "/assets/icons/nav/light/personal-info.svg",
    darkIcon: "/assets/icons/nav/dark/personal-info.svg",
    title: "Personal Info",
    link: "/personal-info",
  },
  {
    lightIcon: "/assets/icons/nav/light/sharing.svg",
    darkIcon: "/assets/icons/nav/dark/sharing.svg",
    title: "Sharing Center",
    link: "/sharing-center",
  },
  {
    lightIcon: "/assets/icons/nav/light/trash.svg",
    darkIcon: "/assets/icons/nav/dark/trash.svg",
    title: "Trash",
    link: "/trash",
  },
];
const wallets = [
  {
    lightIcon: "/assets/icons/nav/light/credit-card.svg",
    darkIcon: "/assets/icons/nav/dark/credit-card.svg",
    title: "Credit Card",
    link: "/credit-card",
  },
  {
    lightIcon: "/assets/icons/nav/light/bank.svg",
    darkIcon: "/assets/icons/nav/dark/bank.svg",
    title: "Bank Account",
    link: "/bank-account",
  },
  {
    lightIcon: "/assets/icons/nav/light/crypto.svg",
    darkIcon: "/assets/icons/nav/dark/crypto.svg",
    title: "Crypto Account",
    link: "/crypto-account",
  },
];
const folders = [
  {
    lightIcon: "/assets/icons/nav/light/folder.svg",
    darkIcon: "/assets/icons/nav/dark/folder.svg",
    title: "Add new folder",
    link: "/add-new-folder",
  },
];
const tools = [
  {
    lightIcon: "/assets/icons/nav/password-generator.svg",
    darkIcon: "/assets/icons/nav/password-generator.svg",
    title: "Password Generator",
    link: "/password-generator",
  },
  {
    lightIcon: "/assets/icons/nav/password-health.svg",
    darkIcon: "/assets/icons/nav/password-health.svg",
    title: "Password Health",
    link: "/password-health",
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
            <NavigationLink name={category.title} link={category.link ?? "#"}>
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
            <NavigationLink name={wallet.title} link={wallet.link}>
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
            <NavigationLink name={folder.title} link={folder.link}>
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
        {tools.map((tool, i) => (
          <>
            <NavigationLink name={tool.title} link={tool.link}>
              <Image
                src={tool.darkIcon}
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
