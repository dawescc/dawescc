import Sheet from "@/components/sheet";

export default function ResumePage() {
	return (
		<Sheet>
			<div className='max-w-4xl mx-auto p-8 text-[12px]'>
				{/* Header */}
				<header className='mb-8 space-y-2'>
					<h1 className='text-4xl font-bold font-serif mb-4'>Ryan Dawes</h1>
					<div>
						<a
							className='w-fit text-primary'
							href='mailto:hello@dawes.cc?subject=Resume%20Contact%20Request'>
							contact@dawes.cc
						</a>
					</div>
				</header>

				{/* Education */}
				<section className='mb-8 space-y-2'>
					<h2 className='text-2xl font-bold font-serif mb-4'>Education</h2>
					<div>
						<h3 className='text-xl'>Florida Atlantic University</h3>
						<p className='text-accent'>BA of Political Science (2015 to 2019)</p>
					</div>
				</section>

				{/* Work History */}
				<section className='mb-8 space-y-2'>
					<h2 className='text-2xl font-bold font-serif mb-4'>History</h2>

					<div>
						<h3 className='text-xl'>Sr. Software Engineer</h3>
						<p className='text-accent italic'>Sanametrix (January 2025 to Present)</p>
					</div>

					<div>
						<h3 className='text-xl'>Web Developer</h3>
						<p className='text-accent italic'>Sanametrix (October 2024 to January 2025)</p>
					</div>

					<div>
						<h3 className='text-xl'>Jr. Content Specialist / Web Developer</h3>
						<p className='text-accent italic'>Sanametrix (October 2022 to October 2024)</p>
					</div>

					<div>
						<h3 className='text-xl'>Web Developer</h3>
						<p className='text-accent italic'>Freelance (2019 to 2022)</p>
					</div>
				</section>

				{/* Download */}
				<section className='mb-8 space-y-2'>
					<div className='flex gap-2'></div>
				</section>
			</div>
		</Sheet>
	);
}
