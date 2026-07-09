import { Play } from "next/font/google";
import localFont from "next/font/local";

export const playFont = Play({
  weight: "700",
  subsets: ["latin"],
});

export const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});
