import localFont from "next/font/local";

export const GeneralSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/GeneralSans/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/GeneralSans/GeneralSans-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/assets/fonts/GeneralSans/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/GeneralSans/GeneralSans-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
});
