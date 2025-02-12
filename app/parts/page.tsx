import ButtonPushComponent from "@/components/tools/button-pushes";
import { Page, PageBlock, PageDesc } from "@/components/ui/page";

export default async function Home() {
	return (
		<Page title='Ryan Dawes'>
			<PageDesc>Parts</PageDesc>
			<PageBlock>
				<p>Handcrafted pieces. Subject to change.</p>
			</PageBlock>
			<PageBlock fullWidth>
				<div className='bg-block rounded-xl py-20 relative'>
					<p className='absolute inset-0 p-3'>
						Button &mdash; <span className='font-mono'>v01</span>
					</p>
					<div className='grid grid-cols-2'>
						<div className='flex flex-col gap-2 items-center'>
							<ButtonPushComponent />
							<span className='font-mono'>Success</span>
						</div>
						<div className='flex flex-col gap-2 items-center'>
							<ButtonPushComponent error />
							<span className='font-mono'>Error</span>
						</div>
					</div>
				</div>
			</PageBlock>
		</Page>
	);
}
