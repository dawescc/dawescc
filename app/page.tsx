import { Page, PageBlock, PageSectionTitle } from "@/components/page";
import Link from "next/link";

export default function Home() {
	return (
		<Page title='Sr. Software Engineer'>
			<PageBlock>
				<PageSectionTitle text='About' />
				<p className='text-pretty'>
					I like <b>Javascript</b> web applications mostly.
				</p>
				<p className='text-pretty'>
					I work with <b>.NET</b> and <b>Python</b>, too.
				</p>
			</PageBlock>
			<PageBlock>
				<PageSectionTitle text='Now' />
				<p className='text-pretty'>I currently work with the Department of Education.</p>
				<p className='text-pretty'>
					I&apos;m not curently looking for a new role, but feel free to{" "}
					<Link href='mailto:hello@dawes.cc?subject=Website%20Contact%20Request'>contact me</Link>.
				</p>
			</PageBlock>
		</Page>
	);
}
