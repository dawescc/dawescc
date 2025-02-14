import type { Config } from "tailwindcss";
import cornerSmoothing from "tailwind-corner-smoothing";

const config: Config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			borderColor: {
				DEFAULT: "rgb(from var(--border) r g b / <alpha-value>)",
			},

			colors: {
				background: "rgb(from var(--background) r g b / <alpha-value>)",
				foreground: "rgb(from var(--foreground) r g b / <alpha-value>)",
				primary: "rgb(from var(--primary) r g b / <alpha-value>)",
				accent: "rgb(from var(--accent) r g b / <alpha-value>)",
				border: "rgb(from var(--border) r g b / <alpha-value>)",
			},
			fontFamily: {
				sans: ["var(--font-sans)"],
				serif: ["var(--font-serif)"],
				mono: ["var(--font-mono)"],
				bc: ["var(--font-bc)"],
				for: ["var(--font-for)"],
			},
		},
	},
	plugins: [cornerSmoothing],
};
export default config;
