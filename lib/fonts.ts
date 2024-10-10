import { Noto_Sans, Fraunces, JetBrains_Mono } from "next/font/google";

export const fontSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" });
export const fontSerif = Fraunces({ subsets: ["latin"], variable: "--font-noto-serif" });
export const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jet-mono" });
