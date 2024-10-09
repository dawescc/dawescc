import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className='flex-1'>
			<div className='flex flex-col space-y-4 grow max-w-[1200px] mx-auto px-2'>
				<div className='flex flex-col space-y-1 border-b-[1px] pb-8'>
					<h1 className='text-2xl font-serif font-bold'>Ryan Dawes</h1>
					<p className='text-muted-foreground font-serif'>Engineer</p>
					<p>Focused on crafting pragmatic, beautiful, applications.</p>
				</div>

				<div className='container px-0 flex flex-col space-y-2'>
					<h2 className='font-bold font-serif text-xl'>Works</h2>
					<div className='flex flex-col px-2 space-y-1'>
						<h3 className='font-bold font-serif text-lg'>Department of Education</h3>
						<p className='text-pretty'>
							I work with the Department of Education to deliver tools that empower students, parents, educators, and policy makers to gain deeper
							insights into education.
						</p>
						<div className='flex gap-2'>
							<Link
								className='hover:underline text-muted-foreground'
								href='https://nces.ed.gov/'>
								nces.ed.gov
							</Link>

							<Link
								className='hover:underline text-muted-foreground'
								href='https://ies.ed.gov/'>
								ies.ed.gov
							</Link>
						</div>
					</div>
				</div>

				<div className='container px-0 flex flex-col space-y-2'>
					<h2 className='font-bold font-serif text-xl'>Misc.</h2>
					<div className='flex flex-col px-2 space-y-1'>
						<h3 className='font-bold font-serif text-lg'>NCAAF</h3>
						<p className='text-pretty'>
							Real-time scores, team and player statistics, national rankings, and the latest news for college football for college football.
						</p>
						<div className='flex gap-2'>
							<Link
								className='hover:underline text-muted-foreground w-fit'
								href='https://ncaaf.dawes.cc/'>
								ncaaf.dawes.cc
							</Link>
						</div>
						<Card className='bg-project grid place-items-center p-8 group'>
							<Link
								href='https://ncaaf.dawes.cc/'
								className=''>
								<Image
									src='/images/ncaaf.png'
									height='450'
									width='800'
									alt='Image'
									className='group-hover:-translate-y-1 transition-all ease-in-out'
								/>
							</Link>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
