"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
	imageUrl: string;

	className?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, className = "" }) => {
	return (
		<div
			className={cn(
				`relative aspect-square
        rounded-[16.87897px]`,
				className
			)}>
			<div className='absolute inset-[0.45em] overflow-hidden rounded-[12px]'>
				<div className='absolute inset-[-0.45em] no-opacity-hover'>
					<Image
						alt='Card Image'
						loading='lazy'
						width='144'
						height='144'
						className='object-cover text-transparent object-center h-full w-full'
						src={imageUrl}
					/>
				</div>
			</div>
		</div>
	);
};

interface HeroProps {
	imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl }) => {
	const classesToModifyForHero = "h-full w-full hero-img invert";
	return (
		<div className='relative'>
			<div
				aria-hidden='true'
				className='absolute top-0 w-screen z-[2] h-screen overflow-clip -translate-y-4 opacity-[var(--hero-opacity)] pointer-events-none'>
				<div className='absolute z-[3] inset-0 bg-gradient-to-t from-[var(--background)] via-[rgb(from_var(--background)_r_g_b_/_0.75)] to-transparent'></div>
				<Card
					imageUrl={imageUrl}
					className={classesToModifyForHero}
				/>
			</div>
		</div>
	);
};

export default Hero;
