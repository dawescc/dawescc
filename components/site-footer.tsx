import Cc from "@/components/logos/cc-logo";

export default function GlobalFooter() {
	return (
		<footer className='grid grid-cols-1 py-20 pb-4 -mx-4 mt-[2.5em]'>
			<div className='rounded-[16.87897px] bg-[var(--footer-bg)] min-h-40 py-10 px-5 text-accent font-light tracking-wider text-sm'>
				<div className='grid place-content-center'>
					<div className='grid grid-cols-1 aspect-square w-fit *:-my-4 translate-y-4'>
						<div className='text-[1.27em] tracking-widest font-medium'>RYAN DAWES</div>
						<div className='text-[1.55em] tracking-wider flex'>
							<span>&apos;25</span>
							<span className='ml-auto'>
								<Cc className='inline size-6' /> <Cc className='inline size-6' /> <Cc className='inline size-6' />
							</span>
						</div>
						<div className='font-for text-[1.55em] tracking-wider'>著作権 2025</div>
						<a
							href='mailto:hello@dawes.cc'
							className='font-bc translate-y-1.5 text-[1.167em]'>
							HELLO@DAWES.CC
						</a>
						<div className='font-mono'>DESIGN&mdash;DEVELOP</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
