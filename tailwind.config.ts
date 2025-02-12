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
				surface: {
					light: "var(--surface-light)",
					dark: "var(--surface-dark)",
				},
				ui: {
					ice: "var(--ice)",
					polar: "var(--polar)",
					mellow: "var(--mellow)",
					royal: "var(--royal)",
					rhapsody: "var(--rhapsody)",
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
				"2xl": "1.5rem",
			},
		},
	},
};
export default config;
