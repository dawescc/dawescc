import Footer from "@/components/footer";

export default function Home() {
	const slash = (
		<svg
			class='flex-shrink-0 h-5 w-5'
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'>
			<path
				d='M6 13L10 3'
				stroke='currentColor'
				stroke-linecap='round'
			/>
		</svg>
	);
	return (
		<main className='text-neutral-200 bg-neutral-900 h-dvh'>
			<div className='h-full mx-auto md:max-w-2xl flex flex-col gap-10 px-2 sm:px-6 pt-10'>
				<div className='flex flex-col'>
					<div className='inline-flex items-center gap-1 text-xs text-neutral-500 mb-6'>
						{slash}
						<a href='/'>dawes.cc</a>
					</div>

					<h1 className='text-3xl font-bold whitespace-nowrap mb-2'>Ryan Dawes</h1>
					<div className='text-2xl'>Developer</div>
				</div>

				<div className='text-sm flex flex-col gap-6'>
					<div className='flex flex-col gap-2'>
						<p className='font-bold'>Now</p>
						<p className='text-balance'>
							I am a developer for the U.S. Government. I work primarily with <code>Javascript</code> or <code>.NET</code> web applications.
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<p className='font-bold'>About</p>
						<p>I like to focus on pragmatic DX for web applications that are efficient and look good.</p>
					</div>
					<a
						className='text-sm font-bold inline-flex items-center mr-auto bg-neutral-800/50 active:bg-neutral-700/50 hover:bg-neutral-700/30 p-2 rounded-lg hover:no-underline transition-all ease-in-out duration-200'
						href='/stuff'>
						Other Stuff<i className='fa-solid fa-arrow-right-long ml-2'></i>
					</a>
				</div>

				<Footer />
			</div>
		</main>
	);
}
