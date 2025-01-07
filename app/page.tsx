/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { LiveTime, Tag, TimeZone } from "@/components/time";

export default function Home() {
	const experience = [
		{
			role: "Software Engineer II",
			company: {
				name: "US Department of Education",
				url: "https://www.ed.gov/",
			},
		},
		{
			role: "Software Engineer I",
			company: {
				name: "US Department of Education",
				url: "https://www.ed.gov/",
			},
		},
		{
			role: "Support Engineer",
			company: {
				name: "Eastman Chemical Company",
				url: "https://www.eastman.com/en",
			},
		},
	];

	return (
		<div className=' flex-1 flex flex-col py-20 overflow-hidden'>
			<div className='container content-start max-w-2xl flex flex-col gap text-pretty'>
				<Cc className='size-10' />
				<h1 className='font-serif font-bold text-6xl'>Ryan Dawes</h1>
				<p className='font-serif font-medium text-4xl mb-4'>Engineer II</p>

				<div className='flex flex-col gap'>
					<p>
						Creator of <Tag>JavaScript</Tag>, <Tag>ASP.NET</Tag>, and sometimes <Tag>Python</Tag> things.
					</p>
					<p>
						My current timezone is <TimeZone timezone='America/New_York' />. The time here is <LiveTime timezone='America/New_York' />.
					</p>
				</div>

				<hr></hr>

				<div className='flex gap items-start'>
					<img
						alt=''
						src='/images/usdoe.png'
						width={1024}
						height={1024}
						className='size-20 co-img'
					/>

					<img
						alt=''
						src='/images/eastman.png'
						width={750}
						height={500}
						className='h-auto max-w-32 co-img'
					/>
				</div>

				<div className='flex flex-col items-start gap'>
					<table className='w-full max-w-lg'>
						<tbody>
							{experience.map((job, index) => (
								<tr key={index}>
									<td>{job.role}</td>
									<td>
										<Tag href={job.company.url}>{job.company.name}</Tag>
									</td>
								</tr>
							))}
						</tbody>
					</table>

					<span>
						While I am not currently available, feel free to <Link href='mailto:hello@dawes.cc?subject=CV%20Request'>request my CV</Link>
						{" or "}
						<Link href='mailto:hello@dawes.cc?subject=Contact%20Request'>contact me</Link>.
					</span>
				</div>

				<hr></hr>

				<div className='flex gap-[1rem] items-start'>
					<Tag href='https://github.com/dawescc'>Github</Tag>
				</div>
			</div>
		</div>
	);
}

const Cc = ({ className }: { className?: string }) => (
	<svg
		fill='currentColor'
		className={className}
		viewBox='0 0 4500 4500'>
		<g>
			<path d='M3471.24,2685.52l-294.088,-509.375l-571.067,119.258l388.125,-436.125l-294.087,-509.375l535.612,240.792l386.942,-435.438l-56.708,585.959l534.429,241.475l-569.883,118.575l-59.276,584.254Z' />
			<path d='M2330.02,1250.73l-509.375,294.088l119.258,571.067l-436.125,-388.125l-509.375,294.087l240.796,-535.612l-435.442,-386.942l585.959,56.708l241.475,-534.429l118.579,569.883l584.25,59.275Z' />
			<path d='M1344.08,2689.28l568.133,152.23l319.475,-488.134l33.942,582.834l568.133,152.229l-549.004,208.471l34.296,581.512l-374.238,-454.438l-548.645,207.151l319.121,-486.813l-371.213,-455.042Z' />
		</g>
	</svg>
);
