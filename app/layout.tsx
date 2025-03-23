import type { Viewport } from "next";
import "./globals.css";
import font from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Theme } from "@/components/theme-provider";
import MainMenu from "@/components/projects";
import NavMenu from "@/components/nav-menu";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`${font.sans.variable} ${font.serif.variable} ${font.mono.variable} ${font.display.variable}`}>
			<body className={`font-mono antialiased w-dvw h-dvh overflow-hidden flex`}>
				<Theme>
					<main className='grow flex flex-col gap-0 p-3 overflow-hidden'>
						<NavMenu />
						<div className='flex-1 bg-background-100 pt-10 pb-5 px-5 rounded overflow-y-auto border border-gray-3 has-focus-within:border-gray-5 *:custom-focus relative'>
							{children}
						</div>
					</main>
				</Theme>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
