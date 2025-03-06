import DawesCC from "@/components/logos/dawescc";
import DawesDesign from "@/components/logos/dsd";

export default function Home() {
	return (
		<div className='@container min-h-full max-w-prose mx-auto flex flex-col'>
			<div className='flex-1 shrink-0 flex flex-col uppercase py-4'>
				<div className='flex-0 flex gap-4 mb-4 group'>
					<DawesCC className='size-full max-w-1/8 text-brand-dawescc' />
					<DawesDesign className='size-full max-w-1/8 text-brand-dawesdesign' />
				</div>
				<div className='flex-0 flex items-center'>
					<h1 className='font-black w-fit text-6xl font-display cursor-default hover:tracking-widest transition-[letter-spacing] timing-spring'>
						ryan dawes
					</h1>
				</div>
			</div>
			<div className='flex-0 flex font-mono text-gray-900'>
				<p className=''>ABOUT</p>
			</div>
			<div className='flex-1 flex flex-col uppercase font-mono py-4'>
				<div className='grid grid-cols-2 text-lg'>
					<p className='border-x border-t px-1'>SOFTWARE ENGINEER</p>
					<p className='border-r border-t px-1'>UTC-5</p>
				</div>
				<div className='border-x border-y *:px-1 divide-y grid grid-cols-1'>
					<div className='select-none'>&nbsp;</div>
					<div>REACT</div>
					<div>.NET / .NET CORE</div>
					<div>NEXTJS / ASTRO</div>
					<div>PYTHON</div>
					<div className='select-none'>&nbsp;</div>
					<div>
						I've been developing websites for over 10 years, working on a variety of projects, from small business websites to internal tools and
						enterprise applications.
					</div>
				</div>
			</div>
		</div>
	);
}
