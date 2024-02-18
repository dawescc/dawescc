import { ArrowUpRight, Twitter, Github } from "lucide-react";
export default function Footer() {
	return (
		<div className='text-lg font-semibold border-t border-neutral-400/60 dark:border-neutral-800'>
			<div className='py-4 grid grid-rows-1 gap-2 sm:gap-4'>
				<a
					className='button'
					href='https://x.com/dawescc'>
					Twitter
					<Twitter className='ml-2' />
				</a>
				<a
					className='button'
					href='https://github.com/dawescc'>
					Github
					<Github className='ml-2' />
				</a>
				<a
					className='button'
					href='https://blog.dawes.cc'>
					Blog
					<ArrowUpRight className='ml-2' />
				</a>
				<a
					className='button'
					href='https://lf.dawes.cc'>
					Longform
					<ArrowUpRight className='ml-2' />
				</a>
				<span className='inline-flex items-center justify-center text-xs font-light opacity-25'>designed and developed by Ryan with love</span>
			</div>
		</div>
	);
}
