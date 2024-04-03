import localFont from "next/dist/compiled/@next/font/dist/local";

const GeneralSans = localFont({
  src: [
    {
      path: "../../../public/assets/assets/fonts/GeneralSans/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/assets/fonts/GeneralSans/GeneralSans-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/assets/assets/fonts/GeneralSans/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/assets/assets/fonts/GeneralSans/GeneralSans-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});
