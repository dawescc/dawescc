import { cn } from "@/lib/utils";

const DawesCC = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='100%'
			height='100%'
			viewBox='0 0 4171 4171'
			version='1.1'
			fillRule='evenodd'
			clipRule='evenodd'
			strokeLinejoin='round'
			strokeMiterlimit='2'
			fill='currentColor'
			className={cn("aspect-square size-[1em] inline", className)}>
			<rect
				id='dawescc'
				x='1.859'
				y='3.506'
				width='4166.67'
				height='4166.67'
				fill='none'
			/>
			<g id='base'>
				<path
					id='shape'
					d='M4126.86,1066l-0,2041.67c-0,563.413 -457.418,1020.83 -1020.83,1020.83l-2041.67,0c-563.411,0 -1020.83,-457.418 -1020.83,-1020.83l-0,-2041.67c-0,-563.411 457.42,-1020.83 1020.83,-1020.83l2041.67,-0c563.413,-0 1020.83,457.42 1020.83,1020.83Z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default DawesCC;
