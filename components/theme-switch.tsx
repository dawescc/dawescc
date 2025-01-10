"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoon, BsDisplay } from "react-icons/bs";

function Theme({ children }: { children: React.ReactNode }) {
	return <ThemeProvider attribute='data-theme'>{children}</ThemeProvider>;
}

function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const getClassName = (buttonTheme: string) => `
	  p-1 px-2 rounded-md transition-colors
	  ${theme === buttonTheme ? "bg-button-active text-foreground" : "text-foreground"}
	`;

	return (
		<div className='flex gap-[0.5rem] items-start'>
			<button
				onClick={() => setTheme("light")}
				className={getClassName("light")}
				aria-label='Light mode'>
				<BsSun />
			</button>
			<button
				onClick={() => setTheme("dark")}
				className={getClassName("dark")}
				aria-label='Dark mode'>
				<BsMoon />
			</button>
			<button
				onClick={() => setTheme("system")}
				className={getClassName("system")}
				aria-label='System mode'>
				<BsDisplay />
			</button>
		</div>
	);
}

export { Theme, ThemeSwitch };
