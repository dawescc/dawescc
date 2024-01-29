export default function Footer() {
	return (
		<div className='text-lg font-semibold border-t border-neutral-800'>
			<div className='py-4 grid grid-rows-1 gap-2 sm:gap-4 *:bg-neutral-800/50 *:justify-center *:p-2 *:rounded-lg g *:hover:no-underline *:transition-all *:ease-in-out *:duration-200'>
				<a
					className='active:bg-neutral-700/50 hover:bg-neutral-700/30 inline-flex items-center'
					href='https://x.com/dawescc'>
					Twitter<i className='fa-brands fa-twitter ml-2'></i>
				</a>
				<a
					className='active:bg-neutral-700/50 hover:bg-neutral-700/30 inline-flex items-center'
					href='https://github.com/dawescc'>
					Github<i className='fa-brands fa-github-alt ml-2'></i>
				</a>
				<a
					className='active:bg-neutral-700/50 hover:bg-neutral-700/30 inline-flex items-center'
					href='https://blog.dawes.cc'>
					Blog<i className='fa-solid fa-arrow-up-right-from-square ml-2'></i>
				</a>
			</div>
		</div>
	);
}
