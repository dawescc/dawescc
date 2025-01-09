/* eslint-disable @next/next/no-img-element */

export default function Home() {
	return (
		<div className='px-2 py-4'>
			<Cc className='size-10' />
			<h1 className='font-serif font-bold text-2xl'>ryan dawes</h1>
			<p>engineer II</p>
		</div>
	);
}

const Cc = ({ className }: { className?: string }) => (
	<svg
		fill='currentColor'
		className={className}
		viewBox='0 0 4500 4500'>
		<g>
			<path d='M3471.24,2685.52l-294.088,-509.375l-571.067,119.258l388.125,-436.125l-294.087,-509.375l535.612,240.792l386.942,-435.438l-56.708,585.959l534.429,241.475l-569.883,118.575l-59.276,584.254Z' />
			<path d='M2330.02,1250.73l-509.375,294.088l119.258,571.067l-436.125,-388.125l-509.375,294.087l240.796,-535.612l-435.442,-386.942l585.959,56.708l241.475,-534.429l118.579,569.883l584.25,59.275Z' />
			<path d='M1344.08,2689.28l568.133,152.23l319.475,-488.134l33.942,582.834l568.133,152.229l-549.004,208.471l34.296,581.512l-374.238,-454.438l-548.645,207.151l319.121,-486.813l-371.213,-455.042Z' />
		</g>
	</svg>
);
