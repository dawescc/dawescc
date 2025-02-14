import { Collapsible } from "@/components/collapsible";
import RotatingCards from "@/components/cards";
import Cc from "@/components/logos/cc-logo";
import { HiHandThumbUp } from "react-icons/hi2";

export default function Home() {
	const items = [
		{ link: "https://google.com/", imageUrl: "https://picsum.photos/seed/1/500" },
		{ link: "https://google.com/", imageUrl: "https://picsum.photos/seed/2/500" },
		{ link: "https://google.com/", imageUrl: "https://picsum.photos/seed/3/500" },
	];

	return (
		<div className='grid grid-cols-1 gap-10'>
			<div className='h-screen pt-20 grid grid-cols-1 gap-10'>
				<div className='hover:rotate-[2deg] hover:scale-[1.035] transition-all cursor-default rounded-full bg-gradient-to-br from-[var(--primary)] to-[color-mix(in_srgb,var(--primary),black_0%)] text-[var(--cta-text)] px-4 py-1 w-fit h-fit mx-auto ring-1 ring-inset ring-primary/80 shadow-[0_2px_4px_0_rgb(0_0_0_/_0.097)] hover:shadow-md'>
					<HiHandThumbUp className='inline mb-0.5 mr-1' />
					<span className='text-nowrap'>Available Now!</span>
				</div>
				<div>
					<h1 className='font-serif font-black text-[5rem]/[0.88] tracking-tight text-center uppercase'>Ryan Dawes</h1>
				</div>
				<div className='flex justify-center'>
					<Cc className='inline size-10 text-primary' />
				</div>
				<div className='flex justify-center'>
					<RotatingCards
						items={items}
						baseSize={10}
					/>
				</div>
			</div>
			<div className='mt-20 max-w-lg mx-auto grid grid-cols-1 gap-8 sm:gap-10 text-pretty'>
				<p className='text-3xl sm:text-4xl'>Nice to meet you!</p>
				<p className='text-2xl sm:text-3xl'>I&apos;m Ryan, an engineer on the east coast.</p>
				<p className='text-2xl sm:text-3xl'>
					I have a <span className='italic'>thing</span> for reliable code that does what it needs to do.
				</p>
			</div>
			<div className='mt-10 max-w-lg mx-auto grid grid-cols-1 gap-4 text-pretty'>
				<Collapsible title='Why do I like development?'>
					<p className='text-pretty'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus assumenda incidunt similique possimus vero minus tenetur
						dignissimos, nihil, maiores itaque optio odio voluptatem. Libero enim porro totam illum sequi!
					</p>
				</Collapsible>
				<Collapsible title='What technologies do I use?'>
					<p className='text-pretty'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus assumenda incidunt similique possimus vero minus tenetur
						dignissimos, nihil, maiores itaque optio odio voluptatem. Libero enim porro totam illum sequi!
					</p>
				</Collapsible>
				<Collapsible title='What does my experience look like?'>
					<p className='text-pretty'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus assumenda incidunt similique possimus vero minus tenetur
						dignissimos, nihil, maiores itaque optio odio voluptatem. Libero enim porro totam illum sequi!
					</p>
				</Collapsible>
				<Collapsible title='What else do I like?'>
					<p className='text-pretty'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus assumenda incidunt similique possimus vero minus tenetur
						dignissimos, nihil, maiores itaque optio odio voluptatem. Libero enim porro totam illum sequi!
					</p>
				</Collapsible>
			</div>
		</div>
	);
}
