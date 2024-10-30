import type { Config } from "tailwindcss";

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
	plugins: [require("tailwindcss-animate")],
};
export default config;
