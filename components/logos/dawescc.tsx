import { cn } from "@/lib/utils";

const DawesCC = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='100%'
			height='100%'
			viewBox='0 0 1080 1080'
			version='1.1'
			fillRule='evenodd'
			clipRule='evenodd'
			strokeLinejoin='round'
			strokeMiterlimit='2'
			fill='currentColor'
			className={cn("aspect-square size-[1em] inline", className)}>
			<g>
				<g>
					<path
						d='M844.943,670.055l-87.822,-152.111l-170.534,35.614l115.903,-130.237l-87.821,-152.112l159.947,71.906l115.55,-130.033l-16.935,174.982l159.593,72.11l-170.18,35.41l-17.701,174.471Z'
						fillRule='nonzero'
					/>
					<path
						d='M504.149,241.595l-152.112,87.822l35.614,170.534l-130.237,-115.903l-152.112,87.821l71.907,-159.947l-130.033,-115.549l174.981,16.934l72.111,-159.593l35.409,170.18l174.472,17.701Z'
						fillRule='nonzero'
					/>
					<path
						d='M209.721,671.18l169.659,45.46l95.403,-145.769l10.135,174.048l169.659,45.46l-163.946,62.254l10.242,173.653l-111.756,-135.705l-163.84,61.86l95.298,-145.374l-110.854,-135.887Z'
						fillRule='nonzero'
					/>
				</g>
			</g>
		</svg>
	);
};

export default DawesCC;
