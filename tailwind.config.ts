import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		container: {
			padding: "2rem",
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--primary)",
				"button-default": "var(--button-default)",
				"button-hover": "var(--button-hover)",
				"button-active": "var(--button-active)",
				accent: "var(--accent)",
				block: "var(--block)",
				vols: {
					DEFAULT: "#FF8200",
					50: "#FFF1E5",
					100: "#FFE4CC",
					200: "#FFCB99",
					300: "#FFB266",
					400: "#FF9933",
					500: "#FF8200",
					600: "#CC6800",
					700: "#994E00",
					800: "#663400",
					900: "#331A00",
				},
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
};
export default config;
