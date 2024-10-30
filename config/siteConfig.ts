export const siteConfig = {
	name: "Ryan Dawes",
	title: "Engineer — Ryan Dawes",
	url: "https://dawes.cc",
	ogImage: "/og.png",
	description: "Engineer from the USA that specializes in JS and ASP.NET development.",
	author: {
		name: "@dawescc",
		website: "https://dawes.cc",
	},
	links: {
		twitter: "https://twitter.com/dawescc",
		bsky: "https://bsky.app/profile/dawes.cc",
		github: "https://github.com/dawescc",
		website: "https://dawes.cc",
	},
	projects: {
		ncaaf: {
			href: "https://ncaaf.dawes.cc",
			github: "https://github.com/dawescc/ncaaf",
		},
	},
};

export type SiteConfig = typeof siteConfig;
