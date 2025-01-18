import { LiveTime, TimeZone } from "@/components/time";
import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";

export default function GlobalFooter() {
	return (
		<footer className='grid grid-cols-1 py-20 mt-[2.5em]'>
			<div className='font-mono text-sm grid grid-cols-3 items-center'>
				<div>
					<LiveTime timezone='America/New_York' />
					&nbsp;
					<TimeZone timezone='America/New_York' />
				</div>
				<div></div>
				<div className='flex flex-row-reverse flex-wrap gap-[1rem] items-center'>
					{Object.entries(siteConfig.links)
						.filter(([key]) => key !== "twitter" && key !== "bsky" && key !== "website")
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
