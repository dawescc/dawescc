import "@fontsource-variable/geist";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`font-sans antialiased`}>
				<main className='custom-focus relative'>{children}</main>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
