import Cc from "@/components/cc-logo";
import Link from "next/link";

export default function GlobalHeader() {
	return (
		<header className='grid grid-cols-1 py-20 mb-[2.5em]'>
			<div className='font-mono text-sm grid grid-cols-3 items-center'>
				<Link
					href='/'
					className='w-fit'>
					<Cc className='inline size-10 -translate-x-0.5 text-primary' />
				</Link>
				<div></div>
				<div className='flex flex-row-reverse flex-wrap gap-[1rem] items-center'>
					<Link
						href={"/"}
						className='w-fit'>
						Ryan Dawes
					</Link>
				</div>
			</div>
		</header>
	);
}
