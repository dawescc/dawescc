import DawesCC from "@/components/logos/dawescc";
import DawesDesign from "@/components/logos/dsd";
import Threads from "@/components/threads";

export default function Home() {
	return (
		<div className='@container min-h-full max-w-prose mx-auto flex'>
			<div className='flex-1 flex flex-col uppercase py-4 z-[1]'>
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
			<span className='z-[0] opacity-20 dark:opacity-50'>
				<Threads
					amplitude={0.42}
					distance={1.12}
				/>
			</span>
		</div>
	);
}
