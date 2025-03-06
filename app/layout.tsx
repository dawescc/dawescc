import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import font from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/react";
import { Theme } from "@/components/theme-provider";
import MainMenu from "@/components/main-menu";
import NavMenu from "@/components/nav-menu";

export const metadata: Metadata = {
	title: {
		default: siteConfig.title,
		template: `%s - ${siteConfig.name}`,
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	authors: [
		{
			name: siteConfig.author.name,
			url: siteConfig.author.website,
		},
	],
	creator: "dawescc",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: "@dawescc",
	},
};

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
			<body className={`font-sans antialiased w-dvw h-dvh overflow-hidden flex`}>
				<Theme>
					<main className='grow flex flex-col gap-0 px-3 py-4 overflow-hidden'>
						{/*<div className='flex items-center justify-end pb-2'>
							<Link href={"/"}>
								<DawesCC className='size-6' />
							</Link> */}
						<NavMenu />
						<div className='flex-1 bg-background-100 pt-10 pb-5 px-5 rounded overflow-y-auto border relative'>{children}</div>
						<MainMenu />
					</main>
				</Theme>
				<Analytics />
			</body>
		</html>
	);
}
