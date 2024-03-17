import { MoveLeft, ArrowUpRight } from "lucide-react";

export default function Stuff() {
	const projects = [
		// name, description, url
		["porpo", "an F1 data visualisation app written in python", "https://github.com/dawescc/porpo"],
		["emems", "a friendly memo maker in the shape of a docker image", "https://github.com/dawescc/emems"],
		["bloggie", "a micro-blogging platform but for one person, my blog", "https://github.com/dawescc/bloggie"],
		["longform", "a longform writing platform with public likes on each article", "https://github.com/dawescc/longform"],
	];

	const misc = [
		// name, description, url
	];

	return (
		<main className='relative flex-[1_1_100%] overflow-hidden max-w-xl lg:max-w-4xl pb-32'>
			<div className='flex flex-col gap-12 pt-20 px-8'>
				<p>
					You can find more of my work on{" "}
					<a
						className='underline'
						href='https://blog.dawes.cc'>
						my blog
					</a>
					,{" "}
					<a
						className='underline'
						href='https://github.com/dawescc'>
						Github
					</a>
					, or{" "}
					<a
						className='underline'
						href='https://twitter.com/dawescc'>
						Twitter
					</a>
					.
				</p>

				<div className='flex flex-col gap-6'>
					<p className='label'>Projects</p>

					<div className='text-2xl font-normal flex flex-col'>
						{projects.map((index) => (
							<a
								key={index}
								href={index[2]}
								className='*:py-6 clean grid grid-cols-2 hover-bg transition-all rounded-md px-2 -mx-2'>
								<span>
									{index[0]} <ArrowUpRight />
								</span>
								<span>
									<span>{index[1]}</span>
								</span>
							</a>
						))}
					</div>
				</div>

				{misc.length !== 0 && (
					<div className='flex flex-col gap-6'>
						<p className='label'>Misc</p>
						<div className='text-2xl font-normal flex flex-col'>
							{misc.map((index) => (
								<a
									key={index}
									href={index[2]}
									className='*:py-6 clean grid grid-cols-2 hover-bg transition-all rounded-md px-2 -mx-2'>
									<span>
										{index[0]} <ArrowUpRight />
									</span>
									<span>
										<span>{index[1]}</span>
									</span>
								</a>
							))}
						</div>
					</div>
				)}

				<a
					href='/'
					className='flex-1 w-fit inline-flex items-center gap-2 text-xl py-1 px-2'>
					<MoveLeft className='translate-y-[0.5px]' />
					Go back
				</a>
			</div>
		</main>
	);
}
