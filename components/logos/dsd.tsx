import { cn } from "@/lib/utils";

const DawesDesign = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='100%'
			height='100%'
			viewBox='0 0 2134 2134'
			version='1.1'
			fillRule='evenodd'
			clipRule='evenodd'
			strokeLinejoin='round'
			strokeMiterlimit='2'
			className={cn("aspect-square size-[1em] inline", className)}>
			<path
				id='r37'
				d='M2133.33,533.333l0,1066.67c0,294.355 -238.978,533.333 -533.333,533.333l-1066.67,0c-294.354,0 -533.333,-238.978 -533.333,-533.333l-0,-1066.67c-0,-294.354 238.979,-533.333 533.333,-533.333l1066.67,-0c294.355,-0 533.333,238.979 533.333,533.333Z'
				fill='currentColor'
			/>
		</svg>
	);
};

export default DawesDesign;
