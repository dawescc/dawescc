import { Rubik, Playfair_Display, JetBrains_Mono } from "next/font/google";

export const fontSans = Rubik({ subsets: ["latin"], variable: "--font-sans" });
export const fontSerif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
export const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
