export default function Header({ page }) {
	const slash = (
		<svg
			className='flex-shrink-0 h-5 w-5'
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'>
			<path
				d='M6 13L10 3'
				stroke='currentColor'
				strokeLinecap='round'
			/>
		</svg>
	);
	const title = "Developer";
	return (
		<div className='flex flex-col'>
			<div className='inline-flex items-center gap-1 text-xs text-neutral-500 mb-6'>
				{slash}
				<a href='/'>dawes.cc</a>
				{slash}
				<a href={page.url}>{page.name}</a>
			</div>

			<h1 className='text-3xl font-bold whitespace-nowrap mb-2'>Ryan Dawes</h1>
			<div className='text-2xl'>{title}</div>
		</div>
	);
}
