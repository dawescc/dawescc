import Badge from "../components/badge.js";

export default function Home() {
	const loveBadgeCont = (
		<span>
			made with <i className='fa-solid fa-heart'></i>
		</span>
	);
	return (
		<main className='text-zinc-200 bg-zinc-900 break-words'>
			<div className='flex min-h-screen flex-col px-12 py-20'>
				<div className='w-full items-center justify-between flex flex-col gap-14'>
					<div className='w-full md:w-2/3 lg:w-1/3 rounded-lg shadow-md border border-zinc-700 bg-zinc-800 relative flex flex-col'>
						<span className='h-4/5 w-full flex content-center justify-center'>
							<h1 className='text-3xl font-semibold py-3'>Ryan Dawes</h1>
						</span>
						<div className='h-1/5 w-full rounded-b-lg flex content-center justify-center py-1 border-t border-zinc-700 bg-zinc-900 bg-opacity-40'>
							<span className='text-xs font-light'>
								Developer,&nbsp;&nbsp;<em>2019 &mdash; Current</em>
							</span>
						</div>
					</div>
					<div className='w-full md:w-2/3 lg:w-1/3 px-2'>
						<div className='flex flex-col gap-4'>
							<span className='font-semibold text-2xl'>I&apos;m a pragmatic developer and designer.</span>
							<span className='text-lg'>
								I build apps and websites for the modern web. Versitile and flexible, without sacrificing on quality.
							</span>
						</div>
					</div>
					<div className='w-full md:w-2/3 lg:w-1/3 rounded-lg shadow-md p-6 border border-zinc-700 bg-zinc-800'>
						<div className='w-full flex flex-col gap-4'>
							<div className='flex gap-6 md:gap-0 flex-col md:flex-row justify-evenly'>
								<span className='flex flex-col gap-2 md:w-1/3'>
									<span className='border-b border-zinc-700 pb-2 font-semibold text-base'>Personal Projects</span>
									<span className='text-sm flex flex-col gap-1'>
										<a href='https://github.com/dawescc/porpo'>Porpo</a>
										<a href='https://github.com/dawescc/emems'>eMems</a>
									</span>
								</span>
							</div>
						</div>
					</div>
					<div className='w-full md:w-2/3 lg:w-1/3 rounded-lg shadow-md p-6 border border-zinc-700 bg-zinc-800'>
						<div className='w-full flex flex-col gap-4'>
							<div className='flex gap-6 md:gap-0 flex-col md:flex-row justify-evenly'>
								<span className='flex flex-col gap-2 md:w-1/3 '>
									<span className='border-b border-zinc-700 pb-2 font-semibold text-base'>Social</span>
									<span className='text-sm flex flex-col gap-1'>
										<a href='https://twitter.com/dawescc/'>Twitter</a>
										<a href='https://github.com/dawescc/'>Github</a>
										<a href='https://blog.dawes.cc/'>Blog</a>
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className='footer p-10 bg-zinc-800 border-t border-zinc-700'>
				<div className='w-full flex flex-col items-center p-4'>
					<span className='flex flex-col gap-12 items-center'>
						<span></span>
						<p className='text-xs flex gap-2 items-center justify-center content-center'>
							<i className="fa-solid fa-envelope-open-text"></i>
							<span><a href="mailto:sitecontact@dawes.cc" className='hover:underline'>Contact me</a>
							&nbsp;with any inquires</span> 
						</p>

						<Badge
							content={loveBadgeCont}
							color={"pink"}
							shape={"rounded"}
						/>
					</span>
				</div>
			</footer>
		</main>
	);
}
