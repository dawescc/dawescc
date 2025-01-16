import { Page } from "@/components/page";
import { SportProvider, SportSelector, SportDisplay } from "@/components/sport";

export default function Home() {
	return (
		<Page title='Sport'>
			<SportProvider>
				<div className='grid grid-cols-1 md:grid-cols-[0.5fr,1fr] gap-[1em]'>
					<div className='p-4 font-mono'>
						<SportSelector />
					</div>
					<div className='p-4'>
						<SportDisplay />
					</div>
				</div>
			</SportProvider>
		</Page>
	);
}
