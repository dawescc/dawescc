import { PiTwitterLogoFill } from "react-icons/pi";
import { LiaGithubAlt } from "react-icons/lia";
import { RiHome2Fill } from "react-icons/ri";
import { TbHexagonLetterPFilled } from "react-icons/tb";
import { FaFootballBall } from "react-icons/fa";

export const siteConfig = {
	name: "Ryan Dawes",
	url: "https://dawes.cc",
	ogImage: "/og.png",
	description: "Ryan Dawes, Engineer.",
	author: {
		name: "@dawescc",
		website: "https://dawes.cc",
	},
	links: [
		{ name: "twitter", href: "https://twitter.com/dawescc", icon: PiTwitterLogoFill },
		{ name: "github", href: "https://github.com/dawescc", icon: LiaGithubAlt },
		{ name: "website", href: "https://dawes.cc", icon: RiHome2Fill },
	],
	projects: [
		{ name: "porpo", href: "https://github.com/dawescc/porpo", icon: TbHexagonLetterPFilled },
		{ name: "ncaaf", href: "https://ncaaf.dawes.cc", icon: FaFootballBall },
	],
};

export type SiteConfig = typeof siteConfig;
