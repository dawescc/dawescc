import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const defaultUrl = process.env.VERCEL_URL ? `https://dawes.cc/` : "http://localhost:3000";
const title = "Ryan Dawes";
export const metadata = {
	title: title,
	metadataBase: new URL(defaultUrl),
	openGraph: {
		title: title,
		url: new URL(defaultUrl),
		siteName: title,
	},
	twitter: {
		title: title,
		card: "summary_large_image",
		site: "@dawescc",
		creator: "@dawescc",
	},
	description: "A pragmatic and effective design engineer.",
};

export const viewport = {
	themeColor: "transparent",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className={vietnam.className}>
			<body className='relative flex justify-center text-3xl lg:text-4xl leading-10 lg:leading-[46px] tracking-[0.02rem;] font-medium'>{children}</body>
		</html>
	);
}
