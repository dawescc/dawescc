import { Page, PageBlock, PageDesc } from "@/components/ui/page";
import Link from "next/link";

export default function Home() {
	return (
		<Page title='Ryan Dawes'>
			<PageDesc>Engineer</PageDesc>
			<PageBlock fullWidth>
				<p className='text-pretty'>
					<Link href='mailto:hello@dawes.cc?subject=Website%20Contact%20Request'>Contact me</Link>.
				</p>
			</PageBlock>
		</Page>
	);
}
