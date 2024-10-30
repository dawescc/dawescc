import { ThemeSwitch } from "./theme-switch";
import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { SiBluesky } from "react-icons/si";

export default function GlobalFooter() {
	return (
		<footer className='py-10 md:py-8 text-sm text-accent'>
			<div className='container flex flex-col items-start gap-[1rem]'>
				<Link
					href={siteConfig.links.bsky}
					className='text-2xl  hover:text-foreground transition-colors'>
					<SiBluesky className='inline' />
				</Link>
				<span>Designed and developed with love.</span>
				<span>Logos and trademarks belong to their respective owners.</span>
				<div className='flex gap-[1rem] items-start mt-[2rem]'>
					<ThemeSwitch />
				</div>
			</div>
		</footer>
	);
}
