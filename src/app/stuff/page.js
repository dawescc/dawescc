export default function Stuff() {
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

	const TABLE_HEAD = ["Name", "Description", "Link"];
	const TABLE_BODY = [
		["porpo", "an F1 data visulaitions app written in python", "https://github.com/dawescc/porpo"],
		["emems", "a friendly notetaker in the shape of a docker image", "https://github.com/dawescc/emems"],
		["bloggie", "a micro-blogging platform but for one person", "https://github.com/dawescc/bloggie"],
	];

	return (
		<main className='text-neutral-200 bg-neutral-900 h-dvh'>
			<div className='h-full mx-auto md:max-w-2xl flex flex-col gap-10 px-2 sm:px-6 pt-10'>
				<div className='flex flex-col'>
					<div className='inline-flex items-center gap-1 text-xs text-neutral-500 mb-6'>
						{slash}
						<a href='/'>dawes.cc</a>
						{slash}
						<a href='/stuff'>stuff</a>
					</div>

					<h1 className='text-3xl font-bold whitespace-nowrap mb-2'>Ryan Dawes</h1>
					<div className='text-2xl'>Developer</div>
				</div>

				<div className='flex flex-col gap-2'>
					<p className='font-bold text-lg'>Stuff</p>
					<p className='text-balance'>
						You can find more of my work on <a href='https://github.com/dawescc'>Github</a> or <a href='https://twitter.com/dawescc'>Twitter</a>.
					</p>
				</div>
				<div className='text-sm flex flex-col gap-8'>
					<div className='flex flex-col gap-2'>
						<p className='font-bold'>Projects</p>
						<div class='flex flex-col'>
							<div class='min-w-full'>
								<table class='min-w-full divide-ydivide-neutral-700 text-xs'>
									<thead>
										<tr>
											{TABLE_HEAD.map((head) => (
												<th
													key={head}
													className='text-left border-b border-neutral-700/50 p-4'>
													<span className='font-bold leading-none'>{head}</span>
												</th>
											))}
										</tr>
									</thead>
									<tbody class='divide-y divide-neutral-700/50 text-neutral-300'>
										{TABLE_BODY.map((index) => (
											<tr
												key={index}
												className='hover:bg-neutral-800/50 hover:text-white transition-all ease-in-out duration-200'>
												<td className='p-4'>
													<span className='leading-none'>{index[0]}</span>
												</td>
												<td className='p-4'>
													<span className='leading-none text-balance'>{index[1]}</span>
												</td>
												<td className='p-4'>
													<a
														href={index[2]}
														className='leading-none inline-flex items-center hover:text-pink-300'>
														Visit<i className='fa-solid fa-arrow-up-right-from-square ml-2'></i>
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<p className='font-bold mb-2'>Misc</p>
						<div className='flex flex-col gap-10'>
							<div className='flex flex-col gap-1'>
								<p className='mb-1'>
									[01] <span className='bg-neutral-200 rounded-md text-transparent select-none'>*********</span>
								</p>
								<div className='bg-neutral-950/40 ring-1 ring-neutral-700/60 p-10 rounded-xl overflow-hidden relative'>
									<div className='grid place-items-center'>Coming Soon</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<a
					className='text-sm font-bold inline-flex items-center mr-auto bg-neutral-800/50 active:bg-neutral-700/50 hover:bg-neutral-700/30 p-2 rounded-lg hover:no-underline transition-all ease-in-out duration-200'
					href='/'>
					<i className='fa-solid fa-arrow-left-long mr-2 '></i>Back
				</a>

				<div className='text-lg font-semibold border-t border-neutral-800'>
					<div className='py-4 grid grid-rows-1 gap-2 sm:gap-4 *:bg-neutral-800/50 *:justify-center *:p-2 *:rounded-lg *:hover:no-underline *:transition-all *:ease-in-out *:duration-200'>
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
			</div>
		</main>
	);
}
