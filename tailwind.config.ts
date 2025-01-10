import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		container: {
			padding: "2rem",
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
				"button-default": "var(--button-default)",
				"button-hover": "var(--button-hover)",
				"button-active": "var(--button-active)",
				accent: "var(--accent)",
			},
			fontFamily: {
				sans: ["var(--font-cust-sans)"],
				serif: ["var(--font-cust-serif)"],
				mono: ["var(--font-cust-mono)"],
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
