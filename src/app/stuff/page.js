import { MoveLeft, ArrowUpRight } from "lucide-react";

export default function Stuff() {
	const projects = [
		// name, description, tech array, url
		["porpo", "Formula 1 data visualizations on any device.", ["Python"], "https://github.com/dawescc/porpo"],
		["emems", "Friendly web-based memo maker.", ["Javascript", "Docker"], "https://github.com/dawescc/emems"],
		["bloggie", "Microblogging platform for one person.", ["NextJS", "Supabase"], "https://github.com/dawescc/bloggie"],
		["longform", "Longform writing platform with public likes on each article.", ["NextJS", "Supabase"], "https://github.com/dawescc/longform"],
	];

	const misc = [
		// name, description, url
	];

	const work = [
		// name, description, tech array, url
		["NCES", "Misc. sites under the U.S. Deptartment of Education umbrella.", ["ASP.NET 2/3/4", "Classic ASP"], "https://nces.ed.gov"],
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

				<p className='paragraph text-2xl font-normal'>Some of my personal projects, crafted to fill a personal need or help me learn.</p>

				{projects.length !== 0 && (
					<div className='flex flex-col gap-6'>
						<p className='label'>Projects</p>

						<div className='text-2xl font-normal flex flex-col'>
							{projects.map((project, projectIndex) => (
								<a
									key={projectIndex}
									href={project[3]}
									id={project[0]}
									className='*:py-6 clean grid grid-cols-2 hover-bg transition-all rounded-md px-2 -mx-2 text-base lg:text-2xl group'>
									<div
										id='project_name'
										className='flex flex-col gap-4 lg:flex-row'>
										<span className='inline-flex items-center'>
											<ArrowUpRight className='transition-all -translate-y-1 group-hover:-translate-y-[6px]  group-hover:translate-x-[1px]' />{" "}
											{project[0]}
										</span>
										<span
											id='project_tech'
											className='flex flex-col gap-2 lg:mx-auto'>
											{project[2].map((tech, techIndex) => (
												<span
													key={techIndex}
													className='project-tech'>
													{tech}
												</span>
											))}
										</span>
									</div>
									<span
										id='project_desc'
										className='paragraph'>
										{project[1]}
									</span>
								</a>
							))}
						</div>
					</div>
				)}

				{misc.length !== 0 && (
					<div className='flex flex-col gap-6'>
						<p className='label'>Misc</p>
						<div className='text-2xl font-normal flex flex-col'>
							{misc.map((project, projectIndex) => (
								<a
									key={projectIndex}
									href={project[3]}
									id={project[0]}
									className='*:py-6 clean grid grid-cols-2 hover-bg transition-all rounded-md px-2 -mx-2 text-base lg:text-2xl group'>
									<div
										id='project_name'
										className='flex flex-col gap-4 lg:flex-row'>
										<span className='inline-flex items-center'>
											<ArrowUpRight className='transition-all -translate-y-1 group-hover:-translate-y-[6px]  group-hover:translate-x-[1px]' />{" "}
											{project[0]}
										</span>
										<span
											id='project_tech'
											className='flex flex-col gap-2 lg:mx-auto'>
											{project[2].map((tech, techIndex) => (
												<span
													key={techIndex}
													className='project-tech'>
													{tech}
												</span>
											))}
										</span>
									</div>
									<span
										id='project_desc'
										className='paragraph'>
										{project[1]}
									</span>
								</a>
							))}
						</div>
					</div>
				)}

				<p className='paragraph text-2xl font-normal'>Some projects I have been a part of during my career.</p>
				{work.length !== 0 && (
					<div className='flex flex-col gap-6'>
						<p className='label'>Work</p>
						<div className='text-2xl font-normal flex flex-col'>
							{work.map((project, projectIndex) => (
								<a
									key={projectIndex}
									href={project[3]}
									id={project[0]}
									className='*:py-6 clean grid grid-cols-2 hover-bg transition-all rounded-md px-2 -mx-2 text-base lg:text-2xl group'>
									<div
										id='project_name'
										className='flex flex-col gap-4 lg:flex-row'>
										<span className='inline-flex items-center'>
											<ArrowUpRight className='transition-all -translate-y-1 group-hover:-translate-y-[6px]  group-hover:translate-x-[1px]' />{" "}
											{project[0]}
										</span>
										<span
											id='project_tech'
											className='flex flex-col gap-2 lg:mx-auto'>
											{project[2].map((tech, techIndex) => (
												<span
													key={techIndex}
													className='project-tech'>
													{tech}
												</span>
											))}
										</span>
									</div>
									<span
										id='project_desc'
										className='paragraph'>
										{project[1]}
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
