"use client";

import { useEffect, useRef } from "react";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { cn } from "@/lib/utils";

const iconClasses = "inline mb-[5px] lang-icon cursor-pointer select-none ";

export default function Languages() {
	const paragraphRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const paragraphElement = paragraphRef.current;
		if (!paragraphElement) return;

		const handleDelegatedClick = (event: MouseEvent) => {
			const targetElement = event.target as Element;
			const clickedIcon = targetElement.closest(".lang-icon") as HTMLElement | null;

			if (!clickedIcon) {
				return;
			}

			const separator = document.createTextNode(" && ");
			const iconClone = clickedIcon.cloneNode(true) as HTMLElement;

			paragraphElement.appendChild(separator);
			paragraphElement.appendChild(iconClone);
		};

		paragraphElement.addEventListener("click", handleDelegatedClick);

		return () => {
			paragraphElement.removeEventListener("click", handleDelegatedClick);
		};
	}, []);

	return (
		<p ref={paragraphRef}>
			I like <SiJavascript className={cn(iconClasses, "text-[#F0DB4F]")} /> && <SiTypescript className={cn(iconClasses, "text-[#3178c6]")} />
		</p>
	);
}
