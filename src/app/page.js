import Footer from "@/components/footer";
import Header from "@/components/header";

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
			I like to focus on pragmatic development strategies for web applications that are efficient and look good. I want to fix long load times and
			complicated code structures.
		</p>
	);
};

export default function Home() {
	return (
		<main className='text-neutral-200 bg-neutral-900 h-dvh min-h-dvh'>
			<div className='h-full mx-auto md:max-w-2xl flex flex-col gap-8 pt-10'>
				<Header page={{ name: "", url: "#" }} />
				<div className='text-sm flex flex-col gap-8'>
					<div className='flex flex-col gap-2'>
						<p className='font-bold'>Now</p>
						{nowText()}
					</div>
					<div className='flex flex-col gap-2'>
						<p className='font-bold'>About</p>
						{aboutText()}
					</div>
					<a
						className='text-sm font-bold inline-flex items-center mr-auto bg-neutral-800/50 active:bg-neutral-700/50 hover:bg-neutral-700/30 p-2 rounded-lg hover:no-underline transition-all ease-in-out duration-200'
						href='/stuff'>
						Some of my work<i className='fa-solid fa-arrow-right-long ml-2'></i>
					</a>
				</div>
				<Footer />
			</div>
		</main>
	);
}
