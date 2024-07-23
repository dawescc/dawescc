export default function NotFound() {
	return (
		<div className='flex flex-col pt-20 px-8'>
			<div
				className='section'
				id='title'>
				<h1 className='siteTitle'>Ryan Dawes</h1>
			</div>

			<div className='section'>
				<h3 className='sectionHeader'>Error 404</h3>
				<div className='subSection'>
					<p>Couldn&apos;t find that page.</p>
					<a
						className='w-min whitespace-nowrap'
						href='/'>
						Go home.
					</a>
				</div>
			</div>
		</div>
	);
}
