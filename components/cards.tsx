import Image from "next/image";
import Link from "next/link";

interface CardItem {
	link: string;
	imageUrl: string;
}

interface RotatingCardsProps {
	items: CardItem[];
}

const RotatingCards: React.FC<RotatingCardsProps> = ({ items }) => {
	return (
		<div className='flex flex-row -space-x-9 md:-space-x-6 lg:-space-x-8'>
			{items.map((item, index) => {
				// Alternate between positive and negative rotation
				const rotation = index % 2 === 0 ? "rotate-6" : "-rotate-6";

				return (
					<div
						key={index}
						className={`aspect-square size-28 sm:size-32 md:size-36 
                         bg-[#F5F4F9] border border-[#E6E6E6] rounded-md 
                         overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] 
                         hover:shadow-[0_6px_6px_rgba(0,0,0,0.08)] 
                         hover:-translate-y-1 transition duration-200 ease-in-out ${rotation}`}>
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
