import { Page } from "@/components/page";
import { sitePages } from "@/config/sitePages";

export default function Home() {
	return (
		<Page>
			<div className='grid grid-cols-2 md:grid-cols-3 gap-[1em]'>
				<div className='space-y-[1em] [&_a]:italic'>
					<p className='text-pretty'>
						I like <b>Javascript</b> web applications mostly.
					</p>
					<p className='text-pretty'>
						I work with <b>.NET</b> and <b>Python</b>, too.
					</p>
				</div>
				<div className='space-y-[1em] [&_a]:italic'>
					<p className='text-pretty'>I currently work with the Department of Education.</p>
					<p className='text-pretty row-start-2'>
						I&apos;m not curently looking for a new role, but feel free to{" "}
						<a href='mailto:hello@dawes.cc?subject=Website%20Contact%20Request'>contact me</a>.
					</p>
				</div>
				{sitePages && (
					<div className='flex flex-col items-end row-start-1 col-start-2 md:col-start-3'>
						{Object.values(sitePages).map((page: any) => (
							<a
								key={page.name}
								href={page.link}
								className='w-fit'>
								{page.name}
							</a>
						))}
					</div>
				)}
			</div>
		</Page>
	);
}
