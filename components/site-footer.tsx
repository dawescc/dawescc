import { LiveTime, TimeZone } from "@/components/time";
import { siteConfig } from "@/config/siteConfig";

export default function GlobalFooter() {
	return (
		<footer className='grid grid-cols-1 pt-20 pb-40 mt-10'>
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
							<a
								key={key}
								href={url}
								className='w-fit'>
								{key.charAt(0).toUpperCase() + key.slice(1)}
							</a>
						))}
				</div>
			</div>
		</footer>
	);
}
