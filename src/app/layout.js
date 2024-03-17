import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Ryan Dawes",
	description: "Developer",
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
