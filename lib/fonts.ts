import { Rubik, Playfair_Display, JetBrains_Mono } from "next/font/google";

import { M_PLUS_1_Code, Libre_Barcode_39_Extended } from "next/font/google";

export const fontSans = Rubik({ subsets: ["latin"], variable: "--font-sans" });
export const fontSerif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
export const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

// Misc. Extra Fonts
export const fontFor = M_PLUS_1_Code({ subsets: ["latin"], variable: "--font-for" });
export const fontBC = Libre_Barcode_39_Extended({ subsets: ["latin"], variable: "--font-bc", weight: "400" });
