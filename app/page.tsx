import DawesCC from "@/components/logos/dawescc";
import DawesDesign from "@/components/logos/dsd";

export default function Home() {
	return (
		<div className='@container min-h-full max-w-prose mx-auto flex'>
			<div className='flex-1 flex flex-col uppercase py-4 z-[1]'>
				<div className='flex-0 flex gap-4'>
					<DawesCC className='size-full max-w-1/6 text-brand-dawescc' />
					<DawesDesign className='size-full max-w-1/6 text-brand-dawesdesign' />
				</div>
				<div className='flex-1 flex items-center'>
					<h1 className='font-black w-fit text-8xl font-display cursor-default hover:tracking-widest transition-[letter-spacing] timing-spring'>
						ryan dawes
					</h1>
				</div>
				<div className='flex-0 flex font-mono text-gray-900'>
					<p className=''>engineering division</p>
				</div>
			</div>
		</div>
	);
}
