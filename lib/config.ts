import type { Metadata } from "next";

export const siteConfig = {
	name: "Ryan Dawes",
	title: "Engineer — Ryan Dawes",
	url: "https://dawes.cc",
	ogImage: "/og.png",
	description: "Design Engineer from the USA.",
	author: {
		name: "@dawescc",
		website: "https://dawes.cc",
	},
	links: {
		twitter: "https://twitter.com/dawescc",
		github: "https://github.com/dawescc",
		website: "https://dawes.cc",
	},
	projects: null,
};

export type SiteConfig = typeof siteConfig;

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
	creator: "@dawescc",
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
