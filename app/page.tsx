import DawesCC from "@/components/logos/dawescc";
import DawesDesign from "@/components/logos/dsd";
import Eleanes from "@/components/logos/eleanes";
import ProjectsList from "@/components/projects";
import Link from "next/link";

export default function Home() {
	return (
		<div className='@container min-h-full max-w-lg flex flex-col'>
			<div className='flex-0 shrink-0 flex flex-col justify-center uppercase py-4'>
				<div className='w-fit grid grid-cols-2 gap-3 mb-20'>
					<Link
						href='/'
						className='rounded [--focus-color:var(--color-brand-dawescc)]'>
						<DawesDesign className='size-8 text-brand-dawesdesign' />
					</Link>
					<Link
						href='https://eleanes.org'
						className='rounded [--focus-color:var(--color-brand-eleanes)]'>
						<Eleanes className='size-8 text-brand-eleanes' />
					</Link>
				</div>

				<h1 className='font-black w-fit text-[size:12cqmin;line-height:1.25em] font-display cursor-default tracking-tight hover:tracking-wide transition-[letter-spacing] timing-spring'>
					ryan dawes
				</h1>
			</div>
			<div className='flex-1 flex flex-col py-4 text-body'>
				<div className='grid grid-cols-2 font-mono uppercase *:[.col-start-2]:text-right'>
					<div className='col-span-2 font-bold text-headline'>about</div>
					<div className='col-start-2'>software developer</div>
					<div className='col-start-2'>utc-5</div>
					<div className='col-span-2'>&nbsp;</div>
					<div className='col-span-2 font-bold text-headline'>proficiencies</div>
					<div className='col-start-2'>javascript react</div>
					<div className='col-start-2'>.net / .net core</div>
					<div className='col-start-2'>nextjs</div>
					<div className='col-start-2'>astro</div>
					<div className='col-start-2'>python</div>
					<div className='col-span-2'>&nbsp;</div>
					<div className='col-span-2 text-justify'>
						I&apos;ve been developing websites for over 10 years, working on a variety of projects, from small business websites to enterprise
						applications.
					</div>
					<div className='col-span-2'>&nbsp;</div>
					<div className='col-span-2 font-bold text-headline'>projects</div>
					<div className='col-start-2'>
						<ProjectsList />
					</div>
				</div>
			</div>
		</div>
	);
}
