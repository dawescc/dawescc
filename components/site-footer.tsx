import { TbLocationFilled } from "react-icons/tb";
import { LiveTime, TimeZone } from "./time";
import { RiBlueskyFill } from "react-icons/ri";
import { siteConfig } from "@/config/siteConfig";

export default function GlobalFooter() {
	return (
		<footer className='mt-40 pt-20 pb-10'>
			<div className='text-sm font-mono flex gap-[1em] items-center text-accent mb-6'>
				<TbLocationFilled className='inline' />
				<span>
					<LiveTime timezone='America/New_York' />
				</span>
				<span>
					<TimeZone timezone='America/New_York' />
				</span>
			</div>
			<div className='text-sm flex gap-[1em] items-center text-accent'>
				<RiBlueskyFill className='inline' />
				<a href={siteConfig.links.bsky}>BlueSky</a>
			</div>
		</footer>
	);
}
