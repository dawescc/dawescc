import { Page, PageBlock } from "@/components/ui/page";

export default function NotFound() {
	return (
		<Page title='404'>
			<PageBlock>
				<p className='text-pretty'>Page not found</p>
			</PageBlock>
		</Page>
	);
}
