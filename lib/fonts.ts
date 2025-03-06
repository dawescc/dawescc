import { Source_Sans_3, EB_Garamond, JetBrains_Mono, Pixelify_Sans } from "next/font/google";

const fontSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans-custom" });
const fontSerif = EB_Garamond({ subsets: ["latin"], variable: "--font-serif-custom" });
const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-custom" });
const fontDisplay = Pixelify_Sans({ subsets: ["latin"], weight: "400", variable: "--font-display-custom" });

const font = {
	sans: fontSans,
	serif: fontSerif,
	mono: fontMono,
	display: fontDisplay,
};

export default font;
