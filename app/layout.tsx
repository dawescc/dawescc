import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import { fontSans, fontSerif, fontMono } from "@/lib/fonts";
import NavigationMenu from "@/components/navigation-menu";
import GlobalFooter from "@/components/site-footer";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
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
		<html lang='en'>
			<body className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} font-sans min-h-screen antialiased`}>
				<main className='relative flex min-h-screen flex-col bg-background'>
					<div className='w-full h-12 flex justify-end items-center px-2 py-1'>
						<NavigationMenu />
					</div>
					{children}
					<GlobalFooter />
				</main>
			</body>
		</html>
	);
}
