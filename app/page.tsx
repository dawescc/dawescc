import DawesCC from "@/components/logos/dawescc";
import DawesDesign from "@/components/logos/dsd";

export default function Home() {
	return (
		<div className='@container min-h-full max-w-prose mx-auto flex relative'>
			<div className='flex-1 flex flex-col uppercase py-4'>
				<div className='flex-0 flex gap-2'>
					<DawesCC className='size-full max-w-1/6' />
					<DawesDesign className='size-full max-w-1/6' />
				</div>
				<div className='flex-1 flex items-center'>
					<h1 className='font-black text-8xl font-display'>ryan dawes</h1>
				</div>
				<div className='flex-0 flex font-mono text-gray-900'>
					<p className=''>engineering division</p>
				</div>
			</div>
		</div>
	);
}
