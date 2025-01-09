import type { Config } from "tailwindcss";
import { fontMono, fontSans, fontSerif } from "./lib/fonts";

const config: Config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		container: {
			padding: "2rem",
			screens: {
				"2xl": "1200px",
			},
		},
		gap: {
			DEFAULT: "2rem",
		},
		borderColor: {
			DEFAULT: "var(--border)",
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				border: "var(--border)",
				tag: "var(--tag)",
				"tag-active": "var(--tag-active)",
				accent: "var(--accent)",
			},
			fontFamily: {
				sans: [`var(${fontSans.variable})`],
				serif: [`var(${fontSerif.variable})`],
				mono: [`var(${fontMono.variable})`],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/nesting")],
};
export default config;
