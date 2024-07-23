import "./globals.css";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	variable: "--font-bvp",
});

const notoserif = Noto_Serif({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	variable: "--font-notos",
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
			className={`${notoserif.variable} ${vietnam.variable} font-sans`}>
			<body className='relative flex justify-center text-3xl lg:text-4xl leading-10 lg:leading-[46px] tracking-[0.02rem;] font-medium'>
				<main className='relative flex-[1_1_100%] overflow-hidden max-w-xl lg:max-w-4xl pb-32'>
					{children}
					<div className='w-full pt-20 grid place-content-center text-[0.55rem]/[1] opacity-65'>
						<span>made with &#9829; in the USA</span>
					</div>
				</main>
			</body>
		</html>
	);
}
