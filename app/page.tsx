import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className='flex-1'>
			<div className='flex flex-col space-y-8 grow max-w-[1200px] mx-auto px-2'>
				<div className='grow flex flex-col space-y-2'>
					<h1 className='text-2xl font-serif font-bold'>Ryan Dawes</h1>
					<p className='text-muted-foreground font-serif'>Engineer</p>
				</div>

				<div className='grow flex flex-col space-y-4 border-b-[1px] pb-8'>Focused on crafting pragmatic, beautiful, applications.</div>

				<div className='grow flex flex-col space-y-4 pb-8'>
					<div className='grow flex flex-col space-y-2'>
						<h2 className='font-bold font-serif text-xl'>Works</h2>
						<p className='text-balance mr-auto'>
							During the day, I work with the Department of Education to deliver tools that empower students, parents, and educators to gain
							deeper insights into education.
						</p>
						<p>
							<Link
								className='hover:underline text-muted-foreground'
								href='https://nces.ed.gov/'>
								nces.ed.gov
							</Link>
							,{" "}
							<Link
								className='hover:underline text-muted-foreground'
								href='https://ies.ed.gov/'>
								ies.ed.gov
							</Link>
						</p>
					</div>
				</div>

				<div className='grow flex flex-col space-y-4 pb-8'>
					<div className='grow flex flex-col space-y-2'>
						<h3 className='font-bold font-serif text-lg'>NCAAF</h3>
						<Link
							className='hover:underline text-muted-foreground w-fit'
							href='https://ncaaf.dawes.cc/'>
							ncaaf.dawes.cc
						</Link>
						<p className='text-balance mr-auto'>
							Real-time scores, team and player statistics, national rankings, and the latest news for college football for college football.
						</p>
					</div>
					<Link href='https://ncaaf.dawes.cc/'>
						<Card className='py-8 bg-accent-background max-w-7xl mx-auto bg-chart-1'>
							<Image
								src='/images/ncaaf.png'
								height='450'
								width='800'
								alt='Image'
								className='max-w-[90%] h-auto mx-auto hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl'
							/>
						</Card>
					</Link>
				</div>
			</div>
		</div>
	);
}
