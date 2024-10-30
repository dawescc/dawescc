import { Noto_Sans, Fraunces, JetBrains_Mono } from "next/font/google";

export const fontSans = Noto_Sans({ subsets: ["latin"], variable: "--font-cust-sans" });
export const fontSerif = Fraunces({ subsets: ["latin"], variable: "--font-cust-serif" });
export const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-cust-mono" });
