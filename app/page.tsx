import Dawescc from "@/components/logos/dawescc";
import Eleanes from "@/components/logos/eleanes";
import ProjectsList, { ProjectListKey } from "@/components/projects";
import Link from "next/link";

export default function Home() {
	return (
		<div className='@container min-h-full max-w-2xl flex flex-col'>
			<div className='flex-0 shrink-0 flex flex-col justify-center uppercase py-4'>
				<div className='w-fit grid grid-cols-2 gap-3 mb-20'>
					<Link
						href='/'
						className='rounded [--focus-color:var(--color-brand-dawescc)] text-title-large leading-0'>
						<Dawescc className='text-brand-dawescc antialiased' />
					</Link>
					<Link
						href='https://eleanes.org'
						className='rounded [--focus-color:var(--color-brand-eleanes)] text-title-large leading-0'>
						<Eleanes className='text-brand-eleanes antialiased' />
					</Link>
				</div>

				<h1 className='font-black w-fit text-[size:14cqmin;line-height:1.25em] font-display cursor-default tracking-tight hover:tracking-wide transition-[letter-spacing] timing-spring'>
					ryan dawes
				</h1>
			</div>
			<div className='flex-1 flex flex-col py-4 text-title-3 tracking-tight mt-15'>
				<div
					className='grid grid-cols-[auto_minmax(fit,1fr)] font-mono uppercase *:[.col-start-2]:text-right
				*:[.col-start-2]:border-b *:pb-5'>
					<div className='col-span-2 font-bold text-title-1 mb-10'>about</div>
					<div className='col-start-2'>software developer</div>
					<div className='col-start-2'>utc-5</div>
					<div className='col-span-2 mt-15'>&nbsp;</div>
					<div className='col-span-2 font-bold text-title-1 mb-10'>proficiencies</div>
					<div className='col-start-2'>javascript react</div>
					<div className='col-start-2'>.net / .net core</div>
					<div className='col-start-2'>nextjs</div>
					<div className='col-start-2'>astro</div>
					<div className='col-start-2'>python</div>
					<div className='col-span-2 mt-15'>&nbsp;</div>
					<div className='col-span-2 text-justify text-title-2'>
						I&apos;ve been developing websites for over 10 years, working on a variety of projects, from small business websites to enterprise
						applications.
					</div>
					<div className='col-span-2 text-justify text-title-2 mt-7.5'>
						Currently contracted with <span className='font-serif font-medium'>the Federal Government of the United States</span>.
					</div>
					<div className='col-span-2 mt-15'>&nbsp;</div>
					<div className='col-span-2 font-bold text-title-1 mb-10'>projects</div>
					<div className='col-span-2'>
						<ProjectsList />
					</div>
					<div className='col-span-2'>&nbsp;</div>
					<div className='col-span-2 '>
						<ProjectListKey />
					</div>
				</div>
			</div>
		</div>
	);
}
