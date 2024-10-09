import MadeWithLove from "@/components/dawescc/mwl";

export default function GlobalFooter() {
	return (
		<footer className='py-6 md:px-8 md:py-1.5 text-sm'>
			<div className='container flex flex-col items-center justify-between gap-4 md:flex-row text-xs font-light'>
				<p className='text-balance text-center align-bottom leading-loose text-muted-foreground/80 md:text-left tracking-tight font-serif'>
					<MadeWithLove className='size-12' />
				</p>
			</div>
		</footer>
	);
}
