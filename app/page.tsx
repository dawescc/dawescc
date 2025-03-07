import DawesCC from "@/components/logos/dawescc";
import DawesDesign from "@/components/logos/dsd";

export default function Home() {
	return (
		<div className='@container min-h-full max-w-sm mx-auto flex flex-col'>
			<div className='flex-1 shrink-0 flex flex-col uppercase py-4'>
				<div className='flex-0 flex gap-4 mb-8 group max-w-1/3'>
					<DawesCC className='size-full text-brand-dawescc' />
					<DawesDesign className='size-full text-brand-dawesdesign' />
				</div>

				<h1 className='font-black w-fit text-6xl font-display cursor-default hover:tracking-widest transition-[letter-spacing] timing-spring'>
					ryan dawes
				</h1>
			</div>
			<div className='flex-1 flex flex-col py-4'>
				<div className='grid grid-cols-2 font-mono uppercase *:[.col-start-2]:text-right'>
					<div className='col-span-2 font-medium'>about</div>
					<div className='col-start-2'>software developer</div>
					<div className='col-start-2'>utc-5</div>
					<div className='col-span-2 font-medium'>proficiencies</div>
					<div className='col-start-2'>javascript react</div>
					<div className='col-start-2'>.net / .net core</div>
					<div className='col-start-2'>nextjs</div>
					<div className='col-start-2'>astro</div>
					<div className='col-start-2'>python</div>
					<div className='col-span-2'>&nbsp;</div>
					<div className='col-span-2 text-justify '>
						I&apos;ve been developing websites for over 10 years, working on a variety of projects, from small business websites to enterprise
						applications.
					</div>
				</div>
			</div>
		</div>
	);
}
