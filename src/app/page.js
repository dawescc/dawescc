import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<main className='relative flex-[1_1_100%] overflow-hidden max-w-xl lg:max-w-4xl pb-32'>
			<a
				href='https://twitter.com/dawescc'
				className='group w-fit'>
				<Image
					className='img-card z-[3] bg-green-300 rotate-3 group-hover:-rotate-3 group-hover:scale-[1.05]'
					src='/images/Headshot.jpg'
					height={500}
					width={500}
					alt="Ryan's Headshot"
				/>
				<div className='img-card z-[2] bg-gray-400 -rotate-6 group-hover:rotate-6 translate-x-0 group-hover:translate-x-1'></div>
				<div className='img-card z-[1] bg-gray-700 rotate-[9deg] group-hover:-rotate-[9deg] translate-x-0 group-hover:-translate-x-1'></div>
			</a>

			<div className='flex flex-col gap-12 pt-20 px-8'>
				<div className='flex flex-col gap-6'>
					<p className='label font-normal'>About</p>
					<p className='paragraph'>Engineer of pragmatic development and design.</p>
					<p className='paragraph text-2xl font-normal'>
						Described as &ldquo;the one on the team that will take on any project and get it done.&rdquo;
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					<p className='label font-normal'>Now</p>
					<p className='paragraph'>Developer with the Department of Education.</p>
					<p className='paragraph text-2xl font-normal'>
						I work primarily with <span className='bg-[#F0DB4F]/75 text-black rounded-lg px-1 py-[1px]'>Javascript</span> and{" "}
						<span className='bg-[#512bd4]/75 text-white rounded-lg px-1 py-[1px]'>.NET</span> web applications.
					</p>
					<p className='paragraph text-2xl font-normal'>I am comfortable using a variety of technologies in the design and development process.</p>
				</div>

				<a
					href='/stuff'
					className='flex-1 w-fit inline-flex items-center gap-2 text-xl'>
					View some of my work
					<MoveRight className='translate-y-[0.5px]' />
				</a>
			</div>
		</main>
	);
}
