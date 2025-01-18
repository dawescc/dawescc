import { Page, PageBlock, PageSectionTitle, PageDesc } from "@/components/page";
import { SportDisplay, SportProvider, SportSelector } from "@/components/sport";

export default function Home() {
	return (
		<Page title='Routine'>
			<PageDesc>Deliberate and effective movements are the key to good exercise.</PageDesc>
			<SportProvider>
				<PageBlock>
					<PageSectionTitle text='Settings' />
					<SportSelector />
				</PageBlock>
				<PageBlock>
					<SportDisplay />
				</PageBlock>
			</SportProvider>
		</Page>
	);
}
