import Footer from "@/components/footer";
import Header from "@/components/header";
import { MoveRight } from "lucide-react";

const nowText = () => {
	return (
		<p className='text-balance'>
			I am a developer for the U.S. Government&rsquo;s Department of Education. I work primarily with <code>Javascript / TypeScript</code> and{" "}
			<code>.NET</code> web applications.
		</p>
	);
};

const aboutText = () => {
	return (
		<p className='text-balance'>
			I am an engineer that likes to focus on pragmatic development and design for web and native applications. I want to fix long load times and run
			headfirst at problems.
		</p>
	);
};

export default function Home() {
	return (
		<main className='h-dvh min-h-dvh font-normal text-medium'>
			<div className='h-full mx-auto md:max-w-2xl flex flex-col gap-8 pt-10 px-2 sm:px-0'>
				<Header page={{ name: "", url: "#" }} />
				<div className='text-sm flex flex-col gap-8'>
					<div className='flex flex-col gap-2'>
						<p className='font-bold'>About</p>
						{aboutText()}
					</div>

					<div className='flex flex-col gap-2'>
						<p className='font-bold'>Now</p>
						{nowText()}
					</div>
					<a
						className='button mr-auto text-sm'
						href='/stuff'>
						Some of my work
						<MoveRight className='ml-2' />
					</a>
				</div>
				<div
					role='spacer'
					className='flex-1'></div>
				<Footer />
			</div>
		</main>
	);
}
