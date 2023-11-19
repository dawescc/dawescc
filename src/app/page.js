import Image from "next/image";

export default function Home() {
	return (
		<main className='text-zinc-200 bg-zinc-900 break-words'>
			<div className='flex min-h-screen flex-col px-12 py-20'>
				<div className='w-full items-center justify-between flex flex-col gap-12'>
					<div className='w-full rounded-lg shadow-md p-6 border border-zinc-700 bg-zinc-800'>
						<div className='w-full flex justify-around items-center relative'>
							<div
								className='h-20 w-auto rounded-xl overflow-hidden border border-zinc-700 shadow-md
                          absolute top-0 left-0 -translate-x-12 -translate-y-12'>
								<Image
									className='object-cover w-full h-full'
									src='https://neutgwolrftsfsvfhutp.supabase.co/storage/v1/object/public/blog/16bmtkif9g3i.png'
								/>
							</div>
							<h1 className='text-3xl font-semibold ml-10'>Ryan Dawes</h1>
						</div>
					</div>
					<span className='text-zinc-400 px-2'>
						<div className='flex flex-col gap-4'>
							<span className='font-semibold text-2xl'>I'm a pragmatic developer and designer.</span>
							<span className='text-lg '>
								I build apps and websites for the modern web. Versitile and flexible, without sacrificing on quality.
							</span>
						</div>
					</span>
					<div className='w-full rounded-lg shadow-md p-6 border border-zinc-700 bg-zinc-800'>
						<div className='w-full flex flex-col gap-4'>
							<div className='flex gap-6 md:gap-0 flex-col md:flex-row justify-evenly'>
								<span className='flex flex-col gap-2'>
									<span className='border-b border-zinc-700 pb-2 font-semibold text-base'>Personal Projects</span>
									<span className='text-sm flex flex-col gap-1'>
										<a href='https://github.com/dawescc/porpo'>Porpo</a>
										<a href='https://github.com/dawescc/emems'>eMems</a>
									</span>
								</span>

								<span className='flex flex-col gap-2'>
									<span className='border-b border-zinc-700 pb-2 font-semibold text-base'>Social</span>
									<span className='text-sm flex flex-col gap-1'>
										<a href='https://twitter.com/dawescc/'>Twitter</a>
										<a href='https://github.com/dawescc/'>Github</a>
										<a href='https://blog.dawes.cc/dawescc/'>Blog</a>
									</span>
								</span>

								<span className='flex flex-col gap-2'>
									<span className='border-b border-zinc-700 pb-2 font-semibold text-base'>Experience</span>
									<span className='text-sm flex flex-col gap-1'>
										<span>Developer, 2019 &mdash; Current</span>
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className='footer p-10 bg-zinc-800 border-t border-zinc-700'>
				<div className='w-full flex flex-col items-center gap-4'>
					<p className='text-center opacity-25 hover:opacity-70 group transition-all duration-200 ease-in-out'>
						{" "}
						made with <i className='fa-solid fa-heart group-hover:text-red-700 duration-300'></i>
					</p>
					<span className='flex gap-4'>
						<a
							href='https://twitter.com/dawescc'
							className='fa-brands fa-twitter'></a>
					</span>
				</div>
			</footer>
		</main>
	);
}
