import { Page, PageBlock, PageDesc } from "@/components/page";

export default function Home() {
	return (
		<Page title='The Importance of Nothing'>
			<PageDesc>Nick Saban</PageDesc>
			<PageBlock fullWidth>
				<p>
					You get up every day, you&apos;re entitled to... <b>nothing</b>.
				</p>
				<p>
					Nobody owes you... <b>nothing</b>.
				</p>
				<p>
					You could have talent, but if you don&apos;t have discipline, if you don&apos;t execute, you don&apos;t focus, you get <b>nothing</b>.
				</p>
				<p>
					{" "}
					If you&apos;re complacent, and not paying attention to detail, what does that get you? <b>Nothing</b>.
				</p>
				<p>&#8230;</p>
				<p>
					So, <b>nothing</b> is acceptable but your best.
				</p>
				<p>
					Everything is determined by you trying to be your best. There should be <b>nothing else</b> but that.
				</p>
			</PageBlock>
		</Page>
	);
}
