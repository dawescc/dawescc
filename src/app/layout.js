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
			className='dark:text-neutral-200 dark:bg-neutral-900 bg-neutral-200 text-black'>
			<body className={vietnam.className}>{children}</body>
		</html>
	);
}
