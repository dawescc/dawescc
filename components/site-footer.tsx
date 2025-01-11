import { TbLocationFilled } from "react-icons/tb";
import { LiveTime, TimeZone } from "@/components/time";
import { RiBlueskyFill } from "react-icons/ri";
import { siteConfig } from "@/config/siteConfig";

export default function GlobalFooter() {
	return (
		<footer className='text-sm grid grid-rows-2 pt-20 pb-40 mt-10'>
			<div className='font-mono grid grid-cols-[.1fr_1fr]'>
				<TbLocationFilled className='inline' />
				<span>
					<LiveTime timezone='America/New_York' />
					&nbsp;
					<TimeZone timezone='America/New_York' />
				</span>
			</div>
			<div className='grid grid-cols-[.1fr_1fr]'>
				<RiBlueskyFill className='inline' />
				<a
					className='w-min'
					href={siteConfig.links.bsky}>
					BlueSky
				</a>
			</div>
		</footer>
	);
}
