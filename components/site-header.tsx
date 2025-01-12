import Cc from "@/components/cc-logo";
import { siteConfig } from "@/config/siteConfig";

export default function GlobalHeader() {
	return (
		<header className='grid grid-cols-1 pb-20 pt-40 mb-10'>
			<div className='font-serif text-xl grid grid-cols-3 items-center'>
				<a
					href='/'
					className='w-fit'>
					<Cc className='inline size-10 -translate-x-0.5 text-primary' />
				</a>
				<div></div>
				<div className='flex flex-row-reverse flex-wrap gap-[1rem] items-center'>
					<a
						href={"/"}
						className='w-fit font-bold'>
						Ryan Dawes
					</a>
				</div>
			</div>
		</header>
	);
}
