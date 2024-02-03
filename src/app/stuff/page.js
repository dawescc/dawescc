"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Stuff() {
	const TABLE_HEAD = ["Name", "Description", "Link"];
	const TABLE_BODY = [
		["porpo", "an F1 data visualisation app written in python", "https://github.com/dawescc/porpo"],
		["emems", "a friendly memo maker in the shape of a docker image", "https://github.com/dawescc/emems"],
		["bloggie", "a micro-blogging platform but for one person, my blog", "https://github.com/dawescc/bloggie"],
	];

	const MISC_ITEMS = [
		// id, title, topic, program, year, alt, url,
		{
			id: "01",
			topic: "Design",
			program: "Figma",
			year: "2024",
			title: "Apple Orchard",
			alt: "4 macbook computers in a 2 by 2 grid.",
			url: "https://pbs.twimg.com/media/GEs6di_XMAAU1X4?format=jpg&name=large",
		},
		{
			id: "02",
			topic: "Design",
			program: "Figma",
			year: "2024",
			title: "Bottomsheet Auth",
			alt: "An auth flow using a bottomsheet instead of a full page.",
			url: "https://pbs.twimg.com/media/GE4Myw6WEAApHZd?format=jpg&name=large",
		},
	];

	const stuffPage = {
		url: "/stuff",
		name: "stuff",
	};

	return (
		<main className='text-neutral-200 bg-neutral-900 h-dvh'>
			<div className='h-full mx-auto md:max-w-2xl flex flex-col gap-8 pt-10'>
				<Header page={stuffPage} />

				<div className='flex flex-col gap-4'>
					<p className='font-bold text-lg'>Stuff</p>
					<p className='text-balance'>
						You can find more of my work on <a href='https://github.com/dawescc'>Github</a> or <a href='https://twitter.com/dawescc'>Twitter</a>.
					</p>
				</div>

				<div className='text-sm flex flex-col gap-10'>
					<div className='flex flex-col gap-2'>
						<p className='font-bold'>Projects</p>
						<div className='flex flex-col'>
							<div className='min-w-full'>
								<table className='min-w-full divide-ydivide-neutral-700 text-xs'>
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
									<tbody className='divide-y divide-neutral-700/50 text-neutral-300'>
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
							{MISC_ITEMS.map((item) => (
								<div
									key={item.id}
									className='flex flex-col gap-1'>
									<p className='mb-1'>
										[{item.id}]{" "}
										<span className='bg-neutral-200 rounded-md text-neutral-700 select-none p-[0.05rem] px-1'>{item.topic}</span> &mdash;{" "}
										{item.title}
									</p>
									<div className='bg-neutral-950/40 ring-1 ring-neutral-700/60 p-10 rounded-xl overflow-hidden relative'>
										<div className='grid place-items-center gap-2'>
											<Image
												alt={item.alt}
												width={"1920"}
												height={"1080"}
												className='rounded-lg w-full h-auto'
												src={item.url}
											/>
											<span className='mr-auto font-semibold text-xs font-mono text-neutral-400'>
												{item.year} &mdash; {item.program}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<a
					className='text-sm font-bold inline-flex items-center mr-auto bg-neutral-800/50 active:bg-neutral-700/50 hover:bg-neutral-700/30 p-2 rounded-lg hover:no-underline transition-all ease-in-out duration-200'
					href='/'>
					<i className='fa-solid fa-arrow-left-long mr-2 '></i>Back
				</a>

				<Footer />
			</div>
		</main>
	);
}
