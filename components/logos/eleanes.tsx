import { cn } from "@/lib/utils";

const Eleanes = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='100%'
			height='100%'
			viewBox='0 0 4171 4167'
			version='1.1'
			fillRule='evenodd'
			clipRule='evenodd'
			strokeLinejoin='round'
			strokeLinecap='round'
			strokeMiterlimit='1.5'
			fill='currentColor'
			className={cn("aspect-square size-[1em] inline", className)}>
			<rect
				id='eleanes'
				x='1.859'
				y='0'
				width='4166.67'
				height='4166.67'
				fill='none'
			/>
			<g id='base'>
				<path
					id='shape'
					d='M4126.86,1062.5l-0,2041.67c-0,563.413 -457.418,1020.83 -1020.83,1020.83l-2041.67,0c-563.411,0 -1020.83,-457.418 -1020.83,-1020.83l-0,-2041.67c-0,-563.411 457.42,-1020.83 1020.83,-1020.83l2041.67,-0c563.413,-0 1020.83,457.42 1020.83,1020.83Z'
					fill='#0091ff'
				/>
			</g>
			<g>
				<path
					d='M2144.92,832.397c330.278,53.155 629.861,203.375 856.564,429.508c478.407,477.205 437.543,1248.18 -91.196,1720.59c-528.741,472.412 -1346.42,468.52 -1824.82,-8.684c-358.806,-357.903 -328.158,-936.127 68.397,-1290.44c396.555,-354.31 1009.81,-351.391 1368.62,6.512c239.204,238.603 218.771,624.086 -45.598,860.292c-264.37,236.206 -673.209,234.26 -912.411,-4.342c-119.601,-119.301 -109.386,-312.043 22.8,-430.146c132.184,-118.102 336.604,-117.13 456.205,2.172'
					fill='none'
					stroke='#fff'
					strokeWidth='337.58px'
				/>
			</g>
		</svg>
	);
};

export default Eleanes;
