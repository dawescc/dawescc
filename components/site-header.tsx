import Cc from "@/components/cc-logo";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function GlobalHeader() {
	return (
		<header className='grid grid-cols-1 pt-20 pb-10 mb-[2.5em]'>
			<div className='font-mono gap-y-[2em] text-sm grid grid-cols-3  items-center'>
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
				<Navbar className='col-span-3' />
			</div>
		</header>
	);
}
