"use client";

import Image from "next/image";
import Link from "next/link";

interface CardItem {
	link: string;
	imageUrl: string;
}

interface RotatingCardsProps {
	items: CardItem[];
	baseSize?: number;
}

const RotatingCards: React.FC<RotatingCardsProps> = ({ items, baseSize = 7 }) => {
	return (
		<div className='flex flex-row -space-x-9 lg:-space-x-8 w-fit'>
			{items.map((item, index) => {
				const rotation = index % 2 === 0 ? "rotate-6" : "-rotate-6";

				return (
					<div
						key={index}
						className={`rotating-card flex-shrink-0 aspect-square
                         bg-[#F5F4F9] border-white border-[0.45em] rounded-[16.87897px]
                         overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] 
                         hover:shadow-[0_6px_6px_rgba(0,0,0,0.08)] 
                         hover:-translate-y-1 transition duration-200 ease-in-out ${rotation}`}
						style={{
							width: `${baseSize}rem`,
							height: `${baseSize}rem`,
						}}>
						<style jsx>{`
							@media (min-width: 640px) {
								.rotating-card {
									width: ${baseSize + 1}rem !important;
									height: ${baseSize + 1}rem !important;
								}
							}
							@media (min-width: 768px) {
								.rotating-card {
									width: ${baseSize + 2}rem !important;
									height: ${baseSize + 2}rem !important;
								}
							}
						`}</style>
						<Link
							href={item.link}
							className='no-opacity-hover'>
							<Image
								alt='Card Image'
								loading='lazy'
								width='144'
								height='144'
								className='object-cover text-transparent object-center h-full w-full'
								src={item.imageUrl}
							/>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default RotatingCards;
