import { Collapsible } from "@/components/collapsible";
import RotatingCards from "@/components/cards";
import Cc from "@/components/logos/cc-logo";
import CTA from "@/components/cta";

export default function Home() {
	const items = [{ imageUrl: "/img/goops.gif" }, { imageUrl: "/img/plane.gif" }, { imageUrl: "/img/sunrise.gif" }];

	const faqs = [
		{
			title: "Why do I like development?",
			text: "Working in development allows me to systematically solve complex problems and be creative in a space that really allows you to do anything you can imagine. I'd say imagining it is the hardest part!",
		},
		{
			title: "What technologies do I use?",
			text: "My favorite to use is React via NextJS or Astro, but C# and .NET Core pay the bills. I integrate modern tools to produce effective tools — you name it, and it I've probably used it one way or another!",
		},
		{
			title: "What does my experience look like?",
			text: "I've been developing websites for over 10 years, but my career got serious after graduating from Florida Atlantic University in 2019. I've worked on a variety of projects, from small business websites to enterprise applications. I currently contract with the US Government to deliver education tools that empower students, educators, and policymakers.",
		},
	];

	return (
		<div className='grid grid-cols-1 gap-10'>
			<div className='h-screen pt-20 mt-10 grid grid-cols-1 gap-10'>
				<div className='flex flex-col justify-center'>
					<h1 className='font-serif font-black text-[5rem]/[0.88] tracking-tight text-center uppercase'>Ryan Dawes</h1>
					<div className='max-w-lg mx-auto pt-5 font-mono text-xs font-light text-accent grid grid-cols-2 place-items-center'>
						<span className='font-for'>ライアン・ドーズ</span>
						<span className='text-right'>2025-02</span>
						<span className='font-bc'>Ryan Dawes</span>
					</div>
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
				{faqs.map((faq, index) => (
					<Collapsible
						key={index}
						title={faq.title}>
						<p className='text-pretty'>{faq.text}</p>
					</Collapsible>
				))}
			</div>
			<div className='flex justify-center'>
				<CTA />
			</div>
		</div>
	);
}
