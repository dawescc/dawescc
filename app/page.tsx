import { Collapsible } from "@/components/collapsible";
import RotatingCards from "@/components/cards";
import Cc from "@/components/logos/cc-logo";
import CTA from "@/components/cta";

export default function Home() {
	const items = [
		{ link: "https://google.com/", imageUrl: "https://picsum.photos/seed/1/500" },
		{ link: "https://google.com/", imageUrl: "https://picsum.photos/seed/2/500" },
		{ link: "https://google.com/", imageUrl: "https://picsum.photos/seed/3/500" },
	];

	return (
		<div className='grid grid-cols-1 gap-10'>
			<div className='h-screen pt-20 mt-10 grid grid-cols-1 gap-10'>
				<div className='flex justify-center'>
					<h1 className='font-serif font-black text-[5rem]/[0.88] tracking-tight text-center uppercase'>Ryan Dawes</h1>
				</div>
				<div className='flex justify-center'>
					<Cc className='inline size-10 sm:size-12 lg:size-14 text-primary' />
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
				<p className='text-2xl sm:text-3xl'>I have a thing for reliable code that does what it needs to do.</p>
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
			<div className='flex justify-center'>
				<CTA />
			</div>
		</div>
	);
}
