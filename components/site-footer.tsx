import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";

export default function GlobalFooter() {
	return (
		<footer className='grid grid-cols-1 py-20 mt-[2.5em] px-5'>
			<div className='font-mono text-sm grid grid-cols-1 place-items-center rounded-xl bg-[var(--footer-bg)] min-h-40 p-5'>
				<div className='flex flex-row-reverse flex-wrap gap-[1rem] items-center'>
					{Object.entries(siteConfig.links)
						.filter(([key]) => key !== "website")
						.map(([key, url]) => (
							<Link
								key={key}
								href={url}
								className='w-fit'>
								{key.charAt(0).toUpperCase() + key.slice(1)}
							</Link>
						))}
				</div>
			</div>
		</footer>
	);
}
