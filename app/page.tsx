import DawesCC from "@/components/logos/dawescc";
import DawesDesign from "@/components/logos/dsd";

export default function Home() {
	return (
		<div className='@container min-h-full max-w-prose mx-auto flex items-center relative'>
			<div className='font-medium text-sm font-mono uppercase absolute top-0 left-0'>
				<span className=''>engineering division</span>
				<span className='flex gap-2 items-center mt-2'>
					<DawesCC />
					<DawesDesign className='ml-[3px]' />
				</span>
			</div>
			<div className='text-pretty break-words font-display'>
				<h1 className='font-black text-7xl '>ryan dawes</h1>
			</div>
		</div>
	);
}
