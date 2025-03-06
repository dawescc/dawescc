"use client";

import { ThemeProvider } from "next-themes";

function Theme({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute='data-theme'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange>
			{children}
		</ThemeProvider>
	);
}

export { Theme };
